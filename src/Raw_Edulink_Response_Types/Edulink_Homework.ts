type Edulink_Homewok_Single = {
  id: number;
  due_text: string;
  due_date: string;
  available_date: string;
  activity: string;
  due_reminder: string;
  subject: string;
  icon: string;
  description: string;
  set_by: string;
  source: 'SIMS' | 'EduLink'; // TODO: There may be more homework sources that I haven't seen yet
  deletable: boolean;
  cloneable: boolean;
  status: string;
  completed: boolean;
};

type Edulink_Homework = {
  jsonrpc: string;
  result: {
    error?: string;
    method: string;
    success: boolean;
    homework: {
      current: Edulink_Homewok_Single[];
      past: Edulink_Homewok_Single[];

      report: {
        group_id: string;
        name: string;
        subject: string;
        learners: {
          learner_id: string;
          homeworks_number: number;
          homeworks_complete: number;
          completion_percent: number;
          homeworks: {
            id: number;
            activity: string;
            subject: string;
            due_date: string;
            available_date: string;
            set_by: string;
            format: number;
            cloneable: boolean;
            subject_id: number;
            deletable: boolean;
            due_text: string;
            source: string;
            completed: boolean;
            attachments: [];
          }[];
          homeworks_count: number;
        }[];
      }[];
    };
    hidden_fields: [];
    metrics: {
      st: string;
      sspt: number;
    };
  };
  id: string;
};

export default Edulink_Homework;
