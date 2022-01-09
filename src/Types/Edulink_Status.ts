type Edulink_Status = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    new_forms: number;
    datacollection: {
      submissions: number;
    };
    lessons: {
      current: {
        description: string;
        room: {
          id: number;
          name: string;
        };
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
        start_time: string;
        end_time: string;
        period_name: string;
        register_id: string;
      };
      next: {
        description: string;
        room: {
          id: number;
          name: string;
        };
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
        start_time: string;
        end_time: string;
        period_name: string;
      };
    };
    new_messages: number;
  };
  id: string;
};

export default Edulink_Status;
