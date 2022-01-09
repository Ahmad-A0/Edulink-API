type Edulink_Calendar = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        calendar: {
            start_date: string;
            end_date: string;
            description: string;
            notes: string;
            all_day_event: boolean;
            duration: string;
        }[];
    };
    id: string;
};
