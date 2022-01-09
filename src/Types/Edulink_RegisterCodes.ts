type Edulink_RegisterCodes = {
    jsonrpc: string;
    id: string;
    result: {
        tags_autohide: boolean;
        hide_comments: boolean;
        lesson_registers_enabled: boolean;
        lesson_registers_default_mark: string;
        lesson_codes: {
            code: string;
            active: boolean;
            name: string;
            type: string;
            is_authorised_absence: boolean;
            is_statistical: boolean;
            is_late: boolean;
            present: boolean;
        }[];
        statutory_registers_enabled: boolean;
        statutory_registers_default_mark_am: string;
        statutory_registers_default_mark_pm: string;
        statutory_codes: {
            code: string;
            active: boolean;
            name: string;
            type: string;
            is_authorised_absence: boolean;
            is_statistical: boolean;
            is_late: boolean;
            present: boolean;
        }[];
        codes_protect_from_flood_fill: string[];
        codes_to_prompt_change: string[];
        method: string;
        success: boolean;
        metrics: {
            st: string;
            sspt: number;
            sspt_us: number;
            uniqid: string;
            be: string;
        };
    };
};
