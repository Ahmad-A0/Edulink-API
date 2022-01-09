type Communicator_Outbox = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    messages: {
      id: number;
      type: string;
      subject: string;
      body: string;
      date: string;
      read: string;
      sender: {
        id: string;
        type: string;
        name: string;
      };
      attachments: any[];
      //! Some fields here might be incorrect. I was unable to get a populated message response for Communicator_Outbox.
    }[];
    pagination: {
      current_page: number;
      total_pages: number;
      total_records: number;
    };
    metrics: {
      st: string;
      sspt: number;
    };
  };
  id: string;
};

export default Communicator_Outbox;
