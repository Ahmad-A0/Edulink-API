type Edulink_Clubs = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        clubs: {
            id: number;
            name: string;
            description: string;
            capacity: {
                maximum: number;
                bookings: number;
            };
            location: string;
            next_session: string;
        }[];
        metrics: {
            st: string;
            sspt: number;
            uniqid: string;
        };
    };
    id: string;
};

export default Edulink_Clubs