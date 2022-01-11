type School_FromCode = {
  jsonrpc: string;
  id: string;
  result: {
    success: boolean;
    error?: string;
    school: {
      server: string;
      school_id: number;
    };
  };
};

export default School_FromCode;
