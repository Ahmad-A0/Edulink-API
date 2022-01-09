type Edulink_Timetable = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    requested_date: string;
    start_of_week: string;
    day_of_week: string;
    weeks: {
      name: string;
      days: {
        id: number;
        name: string;
        is_current: boolean;

        periods: {
          id: number;
          name: string;
          start_time: string;
          end_time: string;
        }[];

        lessons: {
          period_id: number;
          description: string;
          room_id: number;
          room: {
            id: number;
            name: string;
          };
          teaching_group_id: number;
          teaching_group: {
            id: number;
            name: string;
            subject: string;
          };
          teacher: {
            id: number;
            title: string;
            forename: string;
            surname: string;
          };
        }[];
      }[];
    }[];
  };

  id: string;
};

export default Edulink_Timetable;
