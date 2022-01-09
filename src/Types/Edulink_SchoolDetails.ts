type School_Details = {
    jsonrpc: string;
    id: string;
    result: {
        establishment: {
            id: number;
            name: string;
            idp_login: {
                google: string;
                microsoft: string; // TODO: Add support for idp_logins in the actual code
            };
            idp_only: boolean;
            logo: string;
        };
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

export default School_Details;
