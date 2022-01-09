declare type School_FromCode = {
    jsonrpc: string;
    id: string;
    result: {
        success: boolean;
        school: {
            server: string;
            school_id: number;
        };
    };
};
export default School_FromCode;
