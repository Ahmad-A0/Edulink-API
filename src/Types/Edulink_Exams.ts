type Edulink_Exams = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        show_countdown: boolean;
        show_timetable: boolean;
        show_results: boolean;
        show_entries: boolean;
        countdown: {
            minutes_to_go: number;
            exam: string;
            template: string;
        };
        timetable: {
            datetime: string;
            board: string;
            level: string;
            code: string;
            title: string;
            room: string;
            seat: string;
            duration: string;
        }[];
        results: {
            date: string;
            board: string;
            level: string;
            code: string;
            title: string;
            result: string;
            equivalent: string;
            certificate: boolean;
        }[];
        entries: {
            season: string;
            board: string;
            level: string;
            code: string;
            title: string;
        }[];
    };
    id: string;
};

export default Edulink_Exams