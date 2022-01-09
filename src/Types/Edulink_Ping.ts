type Edulink_Ping = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        response: string;
        metrics: {
            st: string;
            sspt: number;
            sspt_us: number;
            uniqid: string;
        };
    };
    id: number;
};

export default Edulink_Ping;
