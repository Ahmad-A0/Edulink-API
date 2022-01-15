import axios from 'axios';

import {
  handleResponse,
  method_server_url,
  uuid,
} from '../Assorted_Tools/tools.js';

import {
  Edulink_Achievement,
  Edulink_AchievementBehaviourLookups,
  Edulink_Attendance,
  Edulink_Behaviour,
  Edulink_Catering,
  Edulink_Clubs,
  Edulink_Documents,
  Edulink_Exams,
  Edulink_ExternalLinks,
  Edulink_Homework,
  Edulink_Login,
  Edulink_Logout,
  Edulink_Personal,
  Edulink_Ping,
  Edulink_RegisterCodes,
  Edulink_SchoolDetails,
  Edulink_Status,
  Edulink_Timetable,
  School_FromCode,
} from '../Raw_Edulink_Response_Types/Edulink_Raw_Response_Types.js';

/**
 * This class houses all the raw requests to the Edulink API.
 * Properties that the methods require need to initialized with the {@link Edulink_Raw.initialize} method.
 */
export default class Edulink_Raw {
  /**
   * The ID of the current signed in user
   */
  learner_id!: string;

  /**
   * The base server that requests are made to
   */
  school_server!: string;

  /**
   * This houses the authentication bearer
   */
  private generic_header!: { Authorization: string };

  /**
   *
   * @param authtoken The authtoken to pass to requests, this is obtained from the {@link Edulink_Login} response
   * @param learner_id The learner_id to pass to requests, this is obtained from the {@link Edulink_Login} response
   * @param school_server The school_server to pass to requests, this is obtained from the {@link Edulink_SchoolDetails} response
   */
  async initialize(
    authtoken: string,
    learner_id: string,
    school_server: string
  ) {
    this.generic_header = {
      Authorization: `Bearer ${authtoken}`,
    };

    this.learner_id = learner_id;
    this.school_server = school_server;
  }

  /**
   * This returns some fields needed in the data section of the other requests
   */
  private get generic_data(): { jsonrpc: string; id: number; uuid: string } {
    return {
      jsonrpc: '2.0',
      id: 1,
      uuid: uuid(), //this.Authentication.uuid,
    };
  }

  /**
   * Gets the timetable for the current user from a given date
   *
   * @param date should be in format: YYYY-MM-DD, this is the start date of the range by default edulink will return 16 days of data //TODO: Fact check this is always true
   * @return A promise that resolves to the {@link Edulink_Attendance} response
   */
  async Timetable(date: string): Promise<Edulink_Timetable> {
    const url = method_server_url('Edulink.Timetable', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Timetable',
        params: {
          date: date,
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Timetable',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Gets the results from the `documents` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Documents} response
   */
  async Documents(): Promise<Edulink_Documents> {
    const url = method_server_url('Edulink.Documents', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Documents',
        params: {
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Documents',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Gets the results from the `exams` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Exams} response
   */
  async Exams(): Promise<Edulink_Exams> {
    const url = method_server_url('Edulink.Exams', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Exams',
        params: {
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Exams',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Gets the results from the `Behaviour` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Behaviour} response
   */
  async Behaviour(): Promise<Edulink_Behaviour> {
    const url = method_server_url('Edulink.Behaviour', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Behaviour',
        params: {
          learner_id: this.learner_id,
          format: 2, // TODO: Find out what the other formats are
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Behaviour',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Gets a look up table for the {@link Edulink_Achievement} and {@link Edulink_Behaviour} responses
   * @returns A promise that resolves to the {@link Edulink_AchievementBehaviourLookups} response, this is a look up table for the {@link Edulink_Achievement} and {@link Edulink_Behaviour} responses
   */
  async AchievementBehaviourLookups(): Promise<Edulink_AchievementBehaviourLookups> {
    const url = method_server_url(
      'Edulink.AchievementBehaviourLookups',
      this.school_server
    );

    const response = await axios.post(
      url,
      {
        method: 'EduLink.AchievementBehaviourLookups',
        params: {},
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.AchievementBehaviourLookups',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * TODO: Can't remeber what this is
   */
  async RegisterCodes(): Promise<Edulink_RegisterCodes> {
    const url = method_server_url('Edulink.RegisterCodes', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.RegisterCodes',
        params: {},
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.RegisterCodes',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `achievements` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Achievement} response
   */
  async Achievement(): Promise<Edulink_Achievement> {
    const url = method_server_url('Edulink.Achievement', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Achievement',
        params: {
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Achievement',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `attendance` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Attendance} response
   */
  async Attendance(): Promise<Edulink_Attendance> {
    const url = method_server_url('Edulink.Attendance', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Attendance',
        params: {
          learner_id: this.learner_id,
          format: 3, // TODO: Find out what the other formats are
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Attendance',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `catering` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Catering} response
   */
  async Catering(): Promise<Edulink_Catering> {
    const url = method_server_url('Edulink.Catering', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Catering',
        params: {
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Catering',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `Homework` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Homework} response
   */
  async Homework(): Promise<Edulink_Homework> {
    const url = method_server_url('Edulink.Homework', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Homework',
        params: {
          format: 2, // TODO: Find out what the other formats are
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Homework',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `external links` section of edulink
   * @returns A promise that resolves to the {@link Edulink_ExternalLinks} response
   */
  async ExternalLinks(): Promise<Edulink_ExternalLinks> {
    const url = method_server_url('Edulink.ExternalLinks', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.ExternalLinks',
        params: {},
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.ExternalLinks',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `clubs` section of edulink
   * @param member If true clubs that the learner is a member of will be returned, if false clubs that the learner is not a member of will be returned
   * @returns A promise that resolves to the {@link Edulink_Clubs} response
   */
  async Clubs(member: boolean = true): Promise<Edulink_Clubs> {
    const url = method_server_url('Edulink.Clubs', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Clubs',
        params: {
          learner_id: this.learner_id,
          member: member,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Clubs',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the data from the `personal` section of edulink
   * @returns A promise that resolves to the {@link Edulink_Personal} response
   */
  async Personal(): Promise<Edulink_Personal> {
    const url = method_server_url('Edulink.Personal', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Personal',
        params: {
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Personal',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns the current status of the user sign in as well as info about the user's upcoming whereabouts, see {@link Edulink_Status}
   * @returns A promise that resolves to the {@link Edulink_Status} response
   */
  async Status(): Promise<Edulink_Status> {
    const url = method_server_url('Edulink.Status', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Status',
        params: {
          last_visible: 0,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Status',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /* 
  TODO: This method needs to take an array of ids for the teachers, I forgot how the request incorporates this array so need to check and fix this method.
  async TeacherPhotos(): Promise<Edulink_TeacherPhotos> {
    const url = method_server_url('Edulink.TeacherPhotos', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.TeacherPhotos',
        params: {
          learner_id: this.learner_id,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.TeacherPhotos',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }
  */

  /**
   * Returns information about the login options of the school as well as the school name and id, see {@link Edulink_SchoolDetails}
   * @param school_server The `school_server` to query information about
   * @returns information about the login options of the school as well as the school name and id, see {@link Edulink_SchoolDetails}
   */
  async SchoolDetails(
    school_server: string = this.school_server
  ): Promise<Edulink_SchoolDetails> {
    const url = method_server_url('Edulink.SchoolDetails', school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.SchoolDetails',
        params: {
          from_app: false,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.SchoolDetails',
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Returns a response that contains the school_code of a school from the school_server
   * @param school_code
   * @param server The server to use to find the school_code. This should always be the default unless you're debugging or something.
   * @returns A promise that resolves to a response object that contains the school code and server.
   */
  async School_FromCode(
    school_code: string,
    server: string = 'https://provisioning.edulinkone.com/'
  ): Promise<School_FromCode> {
    const url = method_server_url('School.FromCode', server, '?method=');

    const response = await axios.post(url, {
      method: 'School.FromCode',
      params: {
        code: school_code,
      },
      ...this.generic_data,
    });

    return handleResponse(response);
  }

  /**
   *
   * @param username The username that should be used for authentication
   * @param password The password that should be used for authentication
   * @param establishment_id The id of the establishment that the user is trying to authenticate against, this is provided in {@link Edulink_SchoolDetails}
   * @param server The server to authenticate with.
   * @returns A promise that resolves to the {@link Edulink_Login} response, this response contains important data about room and group ids
   */
  async Login(
    username: string,
    password: string,
    establishment_id: number,
    server: string = this.school_server
  ): Promise<Edulink_Login> {
    const url = method_server_url('Edulink.Login', server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Login',
        params: {
          establishment_id: establishment_id.toString(),
          from_app: false,
          username: username,
          password: password,
          remember_me: false,
        },
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Login',
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Logs the user out of the school server, this will render most of the class useless as authentication is required for the methods to run
   * @returns A promise that resolves to the {@link Edulink_Logout} response
   */
  async Logout(): Promise<Edulink_Logout> {
    const url = method_server_url('EduLink.Logout', this.school_server);

    const response = await axios.post(
      url,
      {
        method: 'EduLink.Logout',
        params: {},
        ...this.generic_data,
      },
      {
        headers: {
          'X-API-Method': 'EduLink.Logout',
          ...this.generic_header,
        },
      }
    );

    return handleResponse(response);
  }

  /**
   * Ping's the server to keep the session alive //TODO: See how long the default session is and how long it should be
   * @returns A promise that resolves to the {@link Edulink_Ping} response
   */
  async Ping(): Promise<Edulink_Ping> {
    const url = method_server_url('EduLink.Ping', this.school_server);

    const response = await axios.post(url, {
      method: 'EduLink.Ping',
      params: {},
      ...this.generic_data,
    });

    return handleResponse(response);
  }
}
