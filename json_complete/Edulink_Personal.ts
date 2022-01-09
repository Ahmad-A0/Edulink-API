type Edulink_Personal = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        personal: {
            id: string;
            forename: string;
            surname: string;
            chosen_name: string;
            gender: string;
            admission_number: string;
            unique_pupil_number: string;
            unique_learner_number: string;
            date_of_birth: string;
            admission_date: string;
            email: string;
            phone: string;
            address: string;
            ethnicity: string;
            national_identity: string;
            languages: {
                home: string;
                first: string;
            };
            post_code: string;
            note: string;
            room_id: string;
            form_group: {
                id: string;
                name: string;
                room: {
                    id: string;
                    code: string;
                    name: string;
                };
                employee: {
                    id: string;
                    title: string;
                    forename: string;
                    surname: string;
                };
            };
            house_group: {
                id: string;
                name: string;
            };
            year_group: {
                id: string;
                name: string;
            };
        };
        whoami: {
            establishment_id: number;
            id: number;
            title: string;
            forename: string;
            surname: string;
            types: string[];
        };
    };
    id: string;
};
