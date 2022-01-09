type Edulink_DataCollectionLookups = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        title: string;
        emails: {
            location: string[];
        };
        telephones: {
            location: string[];
        };
        ethnicity: {
            id: number;
            description: string;
            active: boolean;
        }[];

        national_identity: {
            id: number;
            description: string;
            active: boolean;
        }[];
        religion: {
            id: number;
            description: string;
            active: boolean;
        }[];
        home_language: {
            id: number;
            description: string;
            active: boolean;
        }[];
        first_language: {
            id: number;
            description: string;
            active: boolean;
        }[];
        speak_welsh: {
            id: number;
            description: string;
            active: boolean;
        }[];
        route: {
            id: number;
            description: string;
            active: boolean;
        }[];
        travel_mode: {
            id: number;
            description: string;
            active: boolean;
        }[];
        medical_condition: {
            id: number;
            description: string;
            active: boolean;
        }[];
        dietary_need: {
            id: number;
            description: string;
            active: boolean;
        }[];
        meal_type: {
            id: number;
            description: string;
            active: boolean;
        }[];

        disability_type: {
            id: number;
            description: string;
            active: boolean;
        }[];
        medical_practice: {
            id: number;
            description: string;
            active: boolean;
        }[];
        gender: {
            id: number;
            description: string;
            active: boolean;
        }[];
        relation_type: {
            id: number;
            description: string;
            active: boolean;
        }[];
        parental_consent: {
            id: number;
            description: string;
        }[];
        address_validate_available: boolean;
        address_country: {
            id: number;
            description: string;
            active: boolean;
        }[];
        address_type: {
            learner: string[];
            contact: string[];
            employee: string[];
        };
        metrics: {
            st: string;
            sspt: number;
        };
    };
    id: string;
};
