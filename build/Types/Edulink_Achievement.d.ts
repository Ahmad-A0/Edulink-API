declare type Edulink_Achievement = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        employees: {
            id: string;
            title: string;
            forename: string;
            surname: string;
        }[];
        achievement: {
            id: number;
            type_ids: number[];
            activity_id: number;
            date: string;
            recorded: {
                employee_id: string;
                date: string;
            };
            comments: string;
            points: number;
        }[];
    };
    id: string;
};
export default Edulink_Achievement;
