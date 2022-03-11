type Edulink_HomeworkDetails = {
  jsonrpc: string;
  id: string;
  result: {
    homework: {
      id: string;
      activity: string;
      description: string;
      subject: string;
      due_date: string;
      due_reminder: any;
      available_date: string;
      user_type: string;
      owner_id: string;
      format: number;
      duration: any;
    };
    method: string;
    success: boolean;
    metrics: {
      st: string;
      sspt: number;
      sspt_us: number;
      uniqid: string;
      be: string;
    };
  };
};

export default Edulink_HomeworkDetails;
