declare type School_Details = {
    jsonrpc: string;
    id: string;
    result: {
        establishment: {
            id: number;
            name: string;
            idp_login: string[] | object;
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
