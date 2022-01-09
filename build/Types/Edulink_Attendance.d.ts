declare type Edulink_Attendance = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    lesson_end_date: string;
    statutory_end_date: string;
    show_lesson: boolean;
    show_today: boolean;
    today: {
      sessions: {
        session_mark_code: string;
        minutes_late: number;
        date: string;
        session: string;
        mark: {
          code: string;
          active: boolean;
          name: string;
          type: string;
          is_authorised_absence: boolean;
          is_statistical: boolean;
          is_late: boolean;
          present: boolean;
        };
      }[];
      lessons: {
        lesson_mark_code: string;
        teaching_group: {
          id: string;
          name: string;
          subject: string;
        };
        period: {
          id: number;
          description: string;
          start_time: string;
          end_time: string;
        };
        mark: {
          code: string;
          active: boolean;
          name: string;
          type: string;
          is_authorised_absence: boolean;
          is_statistical: boolean;
          is_late: boolean;
          present: boolean;
        };
        teachers: {
          id: string;
          title: string;
          forename: string;
          surname: string;
        }[];
      }[];
      clubs: {
        club_id: number;
        club_name: string;
        club_location: string;
        session_id: number;
        start_time: string;
        end_time: string;
        present: boolean;
      }[];
    };
    lesson: {
      subject: string;
      values: {
        present: number;
        unauthorised: number;
        absent: number;
        late: number;
      };
    }[];
    show_statutory: boolean;
    statutory: {
      month: string;
      values: {
        present: number;
        unauthorised: number;
        absent: number;
      };
      exceptions: {
        date: string;
        description: string;
        type: string;
        period: string;
      }[];
    }[];
    metrics: {
      sspt: number;
    };
  };
  id: string;
};
export default Edulink_Attendance;
