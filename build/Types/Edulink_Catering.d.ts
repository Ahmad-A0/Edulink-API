declare type Edulink_Catering = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        balance: number;
        transactions: {
            id: number;
            date: string;
            items: {
                item: string;
                price: number;
            }[];
            balance: number;
        }[];
    };
    id: string;
};
export default Edulink_Catering;
