import { Edulink_Raw } from '../index.js';
import {
  Edulink_Login,
  School_FromCode,
  Edulink_Homework,
} from '../Raw_Edulink_Response_Types/Edulink_Raw_Response_Types.js';
import Edulink_Timetable, {
  Edulink_Timetable_Lesson,
} from '../Raw_Edulink_Response_Types/Edulink_Timetable.js';

/**
 * This class is the main API class. It is an abstracton of the {@link Edulink_Raw} class.
 * If you require more granular control over the API, you can use the {@link Edulink_Raw} class directly.
 */
class Edulink_API {
  /**
   * Whether the {@link Edulink_API} instance has been authenticated
   */
  isAuthenticated: boolean;

  /**
   * If this is true the server will be pinged every 5 minutes to keep the session alive
   */
  keepAlive: NodeJS.Timeout | undefined;

  /**
   * This is the {@link Edulink_Raw} instance that is used to make all the requests to the edulink api
   */
  Edulink_Raw: Edulink_Raw;

  /**
   * This is used to store the raw_responses from the api calls
   */
  Raw_Responses: {
    Login_Raw_Response?: Edulink_Login;
    School_FromCode_Raw_Response?: School_FromCode;
    Homework_Raw_Response?: Edulink_Homework;
    Timetable_Raw_Responses: Edulink_Timetable[];
  };

  // TODO: Stop prettier from formatting this
  /**
   * This is used to store maps from ids to objects
   */
  Maps!: {
    /**
     * Maps from room id to room
     */
    room_id_to_room: Map<string, { code: string; name: string }>;
    /**
     * Maps from year group id to year_group
     */
    year_group_id_to_year_group: Map<string, { name: string; code: string }>;
    /**
     * Maps from community group id to community_group
     */
    community_group_id_to_community_group: Map<string, { name: string }>;
    /**
     * Maps from teaching group id to teaching_group
     */
    teaching_group_id_to_teaching_group: Map<
      string,
      { name: string; employee_id: string }
    >;
    /**
     * Maps from form group id to form_group
     */
    form_group_id_to_form_group: Map<
      string,
      {
        name: string;
        year_group_ids: string[];
        employee_id: string;
        room: { code: string; name: string };
      }
    >;
    /**
     * Maps from period id to lesson, this is populated in {@link Edulink_API.getTimetable}
     */
    period_id_to_lesson: Map<number, Edulink_Timetable_Lesson>;
  };

  /**
   * The full list of permissions the user has can be viewed in `this.Raw_Responses.Login_Raw_Response.result.capabilities`
   * This is defined when {@link Edulink_API.Authenticate} is called
   */
  userPermissions!: {
    can_create_messages: boolean;
    can_change_password: boolean;
    can_create_homework: boolean;
    can_create_club: boolean;
    can_create_behaviour: boolean;
    can_create_achievement: boolean;
  };

  constructor() {
    this.isAuthenticated = false;
    this.keepAlive = undefined;

    this.Edulink_Raw = new Edulink_Raw();
    this.Raw_Responses = { Timetable_Raw_Responses: [] };
  }

  /**
   *
   * @param param0 The school_code, username and password to use to authenticate, if you don't know your school_code your school's postcode can also be used
   * @param keepAlive {@link Edulink_API.keepAlive}
   * @returns A promise that resolves to an array of `[forename, surname, avatar]`
   */
  async Authenticate(
    {
      school_code,
      username,
      password,
    }: { school_code: string; username: string; password: string },
    keepAlive: boolean = false
  ): Promise<
    [
      forename: string,
      surname: string,
      avatar: { photo: string; width: number; height: number }
    ]
  > {
    //* Getting the School from the school code
    this.Raw_Responses.School_FromCode_Raw_Response =
      await this.Edulink_Raw.School_FromCode(school_code);

    if (!this.Raw_Responses.School_FromCode_Raw_Response.result.success) {
      throw new Error(
        `Lookup of school code ${school_code} failed with error: ${this.Raw_Responses.School_FromCode_Raw_Response.result.error}`
      );
    }

    //* Logging in to the school
    this.Raw_Responses.Login_Raw_Response = await this.Edulink_Raw.Login(
      username,
      password,
      this.Raw_Responses.School_FromCode_Raw_Response.result.school.school_id,
      this.Raw_Responses.School_FromCode_Raw_Response.result.school.server
    );

    if (!this.Raw_Responses.Login_Raw_Response.result.success) {
      throw new Error(
        `Authentication failed with error: ${this.Raw_Responses.Login_Raw_Response.result.error}`
      );
    }

    //* Initializing the Edulink_Raw object with the authentication results
    await this.Edulink_Raw.initialize(
      this.Raw_Responses.Login_Raw_Response.result.authtoken,
      this.Raw_Responses.Login_Raw_Response.result.user.id,
      this.Raw_Responses.School_FromCode_Raw_Response.result.school.server
    );

    //* Setting the user permissions
    // TODO: Half of the actions described below are not yet implemented in the API
    this.userPermissions = {
      can_create_messages:
        this.Raw_Responses.Login_Raw_Response.result.can_create_messages,
      can_change_password:
        this.Raw_Responses.Login_Raw_Response.result
          .login_method_change_password,
      can_create_homework:
        this.Raw_Responses.Login_Raw_Response.result.capabilities[
          'homework.create'
        ],
      can_create_club:
        this.Raw_Responses.Login_Raw_Response.result.capabilities.club.create,
      can_create_behaviour:
        this.Raw_Responses.Login_Raw_Response.result.capabilities.behaviour
          .create,
      can_create_achievement:
        this.Raw_Responses.Login_Raw_Response.result.capabilities.achievement
          .create,
    };

    //* Creating the maps
    this.Maps = {
      room_id_to_room: new Map(),
      year_group_id_to_year_group: new Map(),
      community_group_id_to_community_group: new Map(),
      teaching_group_id_to_teaching_group: new Map(),
      form_group_id_to_form_group: new Map(),
      period_id_to_lesson: new Map(),
    };

    for (const { id, code, name } of this.Raw_Responses.Login_Raw_Response
      .result.establishment.rooms) {
      this.Maps.room_id_to_room.set(id, { code, name });
    }

    for (const { id, name, code } of this.Raw_Responses.Login_Raw_Response
      .result.establishment.year_groups) {
      this.Maps.year_group_id_to_year_group.set(id, { name, code });
    }

    for (const { id, name } of this.Raw_Responses.Login_Raw_Response.result
      .establishment.community_groups) {
      this.Maps.community_group_id_to_community_group.set(id, { name });
    }

    for (const { id, name, employee_id } of this.Raw_Responses
      .Login_Raw_Response.result.establishment.teaching_groups) {
      this.Maps.teaching_group_id_to_teaching_group.set(id, {
        name,
        employee_id,
      });
    }

    for (const { id, name, year_group_ids, employee_id, room_id } of this
      .Raw_Responses.Login_Raw_Response.result.establishment.form_groups) {
      this.Maps.form_group_id_to_form_group.set(id, {
        name,
        year_group_ids,
        employee_id,
        room: this.Maps.room_id_to_room.get(room_id) ?? { code: '', name: '' },
      });
    }

    //* Pinging the server to keep the session alive, edulink will automatically close the session otherwise
    // TODO: Find out the default time edulink will keep the session alive
    if (keepAlive) {
      if (this.keepAlive) clearInterval(this.keepAlive);

      this.keepAlive = setInterval(() => {
        this.Edulink_Raw.Ping();
      }, 5 * 1000 * 60); // 5 minutes
    }

    return [
      this.Raw_Responses.Login_Raw_Response.result.user.forename,
      this.Raw_Responses.Login_Raw_Response.result.user.surname,
      this.Raw_Responses.Login_Raw_Response.result.user.avatar,
    ];
  }

  /**
   * Returns the timetable of the user from a given date
   * @param startDate A date in the format `YYYY-MM-DD` to start the events in the timetable from
   * @param endDate A date in the format `YYYY-MM-DD` to end the timetable in the timetable from
   * @param includeOverflow Include events that are outside the end dates included because they are in the same week as the end date, this is ony used if endDate is provided
   * @returns An array of objects that represent a date and its events
   */
  async Timetable(
    startDate?: string,
    endDate?: string,
    includeOverflow: boolean = false
  ): Promise<
    {
      date: string;
      day_name: string;
      lessons: {
        lesson_name: string;
        lesson_room: string;
        period_name: string;
        start_time: string;
        end_time: string;
        teacher: string;
      }[];
    }[]
  > {
    // Setting the date to today if no date is given
    startDate = startDate ?? new Date().toISOString().split('T')[0] ?? '';

    // Setting the end date to 0 if no end date is given, this is so that we only query the api once
    const endDateTime = new Date(endDate ?? '1970-01-01').getTime();

    // Setting the start time for the api query
    let [showingToDateTime, showingToDate] = [
      new Date(startDate).getTime(),
      startDate,
    ];

    let allDays = [];
    do {
      const rawResponse = await this.Edulink_Raw.Timetable(showingToDate);

      if (!rawResponse.result.success) {
        throw new Error(
          `Failed to get the timetable for ${startDate} with error: ${rawResponse.result.error}`
        );
      }

      allDays.push(...rawResponse.result.weeks.map(week => week.days).flat());

      let newShowingToDate = new Date(rawResponse.result.showing_to).getTime();
      showingToDate = rawResponse.result.showing_to;

      // We get the same showing to date twice, we break the loop as there are no more events
      if (newShowingToDate == showingToDateTime) break;
      else showingToDateTime = newShowingToDate;
    } while (endDateTime >= showingToDateTime);

    // Remove any days that are later than the end date specified
    if (!includeOverflow && endDate) {
      for (let i = 0; i < allDays.length; i++) {
        if (new Date(allDays[i]?.date ?? '').getTime() > endDateTime) {
          allDays = allDays.slice(0, i);
          break;
        }
      }
    }

    let ret = [];
    for (const day of allDays) {
      let dayRet = [];

      for (const lesson of day.lessons) {
        // Populating the map from period id to lesson, this lets us get the lesson name and room from the id when we later iterate thorugh periods below
        this.Maps.period_id_to_lesson.set(lesson.period_id, lesson);
      }

      for (const period of day.periods) {
        const lesson = this.Maps.period_id_to_lesson.get(period.id);

        dayRet.push({
          lesson_name: lesson?.teaching_group.subject ?? '',
          lesson_room: lesson?.room.name ?? '',
          period_name: period.name,
          start_time: period.start_time,
          end_time: period.end_time,
          teacher: lesson?.teachers ?? '',
        });
      }

      ret.push({
        date: day.date,
        day_name: day.name,
        lessons: dayRet,
      });
    }

    return ret;
  }

  /**
   * Gets the homework for the authenticated user
   * @param includeCurrent Whether to include currently set homeworks
   * @param includePast Whether to include past homeworks
   * @returns An array of objects that represent a homework
   */
  async Homework(
    includeCurrent: boolean = true,
    includePast: boolean = false
  ): Promise<
    {
      title: string;
      due_date: string;
      subject: string;
      description: string;
      completed: boolean;
      status: string;
      set_by: string;
      due_text: string;
      available_date: string;
    }[]
  > {
    let ret = [];

    const rawResponse = await this.Edulink_Raw.Homework();
    this.Raw_Responses.Homework_Raw_Response = rawResponse;

    if (!rawResponse.result.success) {
      throw new Error(
        `Failed to get homework with error: ${rawResponse.result.error}`
      );
    }

    for (const homework of [
      ...(includeCurrent ? rawResponse.result.homework.current : []),
      ...(includePast ? rawResponse.result.homework.past : []),
    ]) {
      ret.push({
        title: homework.activity,
        due_date: homework.due_date,
        subject: homework.subject,
        description: homework.description,
        completed: homework.completed,
        status: homework.status,
        set_by: homework.set_by,
        due_text: homework.due_text,
        available_date: homework.available_date,
      });
    }

    return ret;
  }
}

export default Edulink_API;
