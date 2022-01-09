type Edulink_Documents = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        documents: {
            _comment: string;
            id: string;
            filename: string;
            summary: string;
            note: string;
            type: string;
            status: string;
            last_updated: string;
            content: string;
        }[];
    };
    id: number;
};

export default Edulink_Documents