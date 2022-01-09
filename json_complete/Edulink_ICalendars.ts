type Edulink_ICalendars = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        exports: {
            personal: {
                type: string;
                description: string;
                enabled: boolean;
                url: string;
            }[];
            children: [];
        };
        imports: {
            id: number;
            description: string;
            owner: string;
            url: string;
            fetch_completed: string;
            user_types: string[];
        }[];
        metrics: {
            st: string;
            sspt: number;
        };
    };
    id: string;
};
