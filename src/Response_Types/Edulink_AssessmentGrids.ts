type Edulink_AssessmentGrids = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    assessment: {
      name: string;
      applies_this_year: boolean;
      applies_to_year_id: string;
      header: string;
      resultstable: [
        {
          name: string;
          content: string;
          css: string;
          visible: boolean;
        }[]
      ][];
      footer: string;
      authorid: 'object';
    }[];

    html: string;
  };
  id: string;
};

export default Edulink_AssessmentGrids;
