type Edulink_Behaviour = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        b4l: [
            {
                subject: string;
                values: {
                    [key in
                        | '1'
                        | '2'
                        | '3'
                        | '4'
                        | '5'
                        | '6'
                        | '7'
                        | '8'
                        | '9'
                        | '-'
                        | '/']?: number;
                };
            }
        ];

        report_cards: {
            behaviour_incident_type_id: number;
            start_date: string;
            end_date: string;
            comments: string;
            active: boolean;
            current: boolean;
            id: number;
        }[];

        detentions: {
            attended: string;
            non_attendance_reason: string;
            id: number;
            description: string;
            start_time: string;
            end_time: string;
            location: string;
            date: string;
        }[];

        behaviour: {
            id: number;
            type_ids: number[];
            activity_id: number;
            date: string;
            time_id: 'object';
            status_id: number;
            bullying_type_id: 'object';
            location_id: 'object';
            recorded: {
                employee_id: string;
                date: string;
            };
            lesson_information: string;
            comments: string;
            points: number;
        }[];

        employees: {
            id: string;
            title: string;
            forename: string;
            surname: string;
        }[];
        hide_fields: string[];
        metrics: {
            st: string;
            sspt: number;
            sspt_us: number;
            uniqid: string;
        };
    };
    id: string;
};

export default Edulink_Behaviour