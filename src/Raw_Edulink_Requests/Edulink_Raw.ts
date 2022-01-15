import axios from 'axios';

import {
  handleResponse,
  method_server_url,
  uuid,
} from '../Assorted_Tools/tools.js';

import Edulink_Achievement from '../Raw_Edulink_Response_Types/Edulink_Achievement.js';
import Edulink_AchievementBehaviourLookups from '../Raw_Edulink_Response_Types/Edulink_AchievementBehaviourLookups.js';
import Edulink_Attendance from '../Raw_Edulink_Response_Types/Edulink_Attendance.js';
import Edulink_Behaviour from '../Raw_Edulink_Response_Types/Edulink_Behaviour.js';
import Edulink_Catering from '../Raw_Edulink_Response_Types/Edulink_Catering.js';
import Edulink_Clubs from '../Raw_Edulink_Response_Types/Edulink_Clubs.js';
import Edulink_Documents from '../Raw_Edulink_Response_Types/Edulink_Documents.js';
import Edulink_Exams from '../Raw_Edulink_Response_Types/Edulink_Exams.js';
import Edulink_ExternalLinks from '../Raw_Edulink_Response_Types/Edulink_ExternalLinks.js';
import Edulink_Homework from '../Raw_Edulink_Response_Types/Edulink_Homework.js';
import Edulink_Login from '../Raw_Edulink_Response_Types/Edulink_Login.js';
import Edulink_Logout from '../Raw_Edulink_Response_Types/Edulink_Logout.js';
import Edulink_Personal from '../Raw_Edulink_Response_Types/Edulink_Personal.js';
import Edulink_Ping from '../Raw_Edulink_Response_Types/Edulink_Ping.js';
import Edulink_SchoolDetails from '../Raw_Edulink_Response_Types/Edulink_SchoolDetails.js';
import Edulink_Status from '../Raw_Edulink_Response_Types/Edulink_Status.js';
// import Edulink_TeacherPhotos from '../Raw_Edulink_Response_Types/Edulink_TeacherPhotos.js';
import Edulink_Timetable from '../Raw_Edulink_Response_Types/Edulink_Timetable.js';
import School_FromCode from '../Raw_Edulink_Response_Types/School_FromCode.js';

export default class Edulink_Raw {
  learner_id!: string;
  school_server!: string;

  private generic_header!: { Authorization: string };

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

  private get generic_data(): { jsonrpc: string; id: number; uuid: string } {
    return {
      jsonrpc: '2.0',
      id: 1,
      uuid: uuid(), //this.Authentication.uuid,
    };
  }

  /**
   * @param date
   * should be in format: YYYY-MM-DD
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
   *
   * @param school_code
   * @param server The server to use to find the school_code. This should always be the default unless you're debugging or something.
   * @returns
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
