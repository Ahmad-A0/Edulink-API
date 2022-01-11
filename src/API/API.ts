import Edulink_Raw from '../Raw_Edulink_Requests/Edulink_Raw.js';
import Edulink_Login from '../Raw_Edulink_Response_Types/Edulink_Login.js';
import School_FromCode from '../Raw_Edulink_Response_Types/School_FromCode.js';
import Edulink_Timetable from '../Raw_Edulink_Response_Types/Edulink_Timetable.js';

class Edulink_API {
  isAuthenticated: boolean;
  keepAlive: NodeJS.Timeout | undefined;
  Edulink_Raw: Edulink_Raw;

  Raw_Responses: {
    Login_Raw_Response?: Edulink_Login;
    School_FromCode_Raw_Response?: School_FromCode;
    Timetable_Raw_Response?: Edulink_Timetable;
  };

  // TODO: Stop prettier from formatting this
  Maps!: {
    room_id_to_room: Map<string, { code: string; name: string }>;
    year_group_id_to_year_group: Map<string, { name: string; code: string }>;
    community_group_id_to_community_group: Map<string, { name: string }>;
    teaching_group_id_to_teaching_group: Map<
      string,
      { name: string; employee_id: string }
    >;
    form_group_id_to_form_group: Map<
      string,
      {
        name: string;
        year_group_ids: string[];
        employee_id: string;
        room: { code: string; name: string };
      }
    >;
  };

  /**
   * The full list of permissions the user has can be viewed in `this.Raw_Responses.Login_Raw_Response.result.capabilities`
   * This is defined when `this.Authenticate` is called
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
    this.Raw_Responses = {};
  }

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
      this.Raw_Responses.School_FromCode_Raw_Response.result.school.school_id
    );

    if (!this.Raw_Responses.Login_Raw_Response.result.success) {
      throw new Error(
        `Authentication failed with error: ${this.Raw_Responses.Login_Raw_Response.result.error}`
      );
    }

    //* Initializing the Edulink_Raw object with the authentication results
    this.Edulink_Raw.initialize(
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
   * @param date A date in the format `YYYY-MM-DD`
   * TODO: @returns
   */
  async Timetable(date?: string) {
    // Setting the date to today if no date is given
    date = date ?? new Date().toISOString().split('T')[0] ?? '';

    // Getting the timetable
    this.Raw_Responses.Timetable_Raw_Response =
      await this.Edulink_Raw.Timetable(date);

    if (!this.Raw_Responses.Timetable_Raw_Response.result.success) {
      throw new Error(
        `Failed to get the timetable for ${date} with error: ${this.Raw_Responses.Timetable_Raw_Response.result.error}`
      );
    }
  }
}

export default Edulink_API;
