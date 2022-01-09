import axios from 'axios';
import moment from 'moment';

import {
  handleResponse,
  method_server_url,
  uuid,
} from '../Assorted_Tools/tools.js';

import Authentication from '../Authentication_Requests/Authentication.js';
import Edulink_Achievement from '../Response_Types/Edulink_Achievement.js';
import Edulink_AchievementBehaviourLookups from '../Response_Types/Edulink_AchievementBehaviourLookups.js';
import Edulink_Attendance from '../Response_Types/Edulink_Attendance.js';
import Edulink_Behaviour from '../Response_Types/Edulink_Behaviour.js';
import Edulink_Catering from '../Response_Types/Edulink_Catering.js';
import Edulink_Clubs from '../Response_Types/Edulink_Clubs.js';
import Edulink_Documents from '../Response_Types/Edulink_Documents.js';
import Edulink_Exams from '../Response_Types/Edulink_Exams.js';
import Edulink_ExternalLinks from '../Response_Types/Edulink_ExternalLinks.js';
import Edulink_Homework from '../Response_Types/Edulink_Homework.js';
import Edulink_Personal from '../Response_Types/Edulink_Personal.js';
import Edulink_Status from '../Response_Types/Edulink_Status.js';
import Edulink_TeacherPhotos from '../Response_Types/Edulink_TeacherPhotos.js';
import Edulink_Timetable from '../Response_Types/Edulink_Timetable.js';

export default class Edulink {
  Authentication!: Authentication;
  learner_id!: string;

  private generic_header!: { Authorization: string };

  async initialize(Authentication: Authentication) {
    this.Authentication = Authentication;

    this.generic_header = {
      Authorization: `Bearer ${this.Authentication.authtoken}`,
    };

    this.learner_id = this.Authentication.learner_id;
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
  async Timetable(
    date: string = moment().format('YYYY-MM-DD')
  ): Promise<Edulink_Timetable> {
    const url = method_server_url(
      'Edulink.Timetable',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Documents',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Exams',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Behaviour',
      this.Authentication.school_server
    );

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
      this.Authentication.school_server
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
    const url = method_server_url(
      'Edulink.RegisterCodes',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Achievement',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Attendance',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Catering',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Homework',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.ExternalLinks',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Clubs',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Personal',
      this.Authentication.school_server
    );

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
    const url = method_server_url(
      'Edulink.Status',
      this.Authentication.school_server
    );

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

  async TeacherPhotos(): Promise<Edulink_TeacherPhotos> {
    const url = method_server_url(
      'Edulink.TeacherPhotos',
      this.Authentication.school_server
    );

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
}
