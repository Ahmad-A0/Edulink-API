type Edulink_TeacherPhotos = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        employee_photos: {
            id: string;
            photo: string;
            width: number;
            height: number;
            cache: string;
        }[];
        metrics: {
            st: string;
            sspt: number;
            sspt_us: number;
            uniqid: string;
        };
    };
    id: number;
};

export default Edulink_TeacherPhotos;
