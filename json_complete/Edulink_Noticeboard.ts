type Edulink_Noticeboard = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        noticeboard: {
            id: number;
            name: string;
            filename: string;
            filesize: number;
            mime_type: string;
            position: number;
        }[];
        snippets: [];
        metrics: {
            st: string;
            sspt: number;
        };
    };
    id: string;
};
