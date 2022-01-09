type Edulink_ExternalLinks = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        links: {
            id: number;
            name: string;
            url: string;
            icon: string;
            position: number;
        }[];
        metrics: {
            st: string;
            sspt: number;
            uniqid: string;
        };
    };
    id: string;
};
