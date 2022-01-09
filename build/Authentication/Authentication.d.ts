import Edulink_Login from '../Types/Edulink_Login';
import Edulink_SchoolDetails from '../Types/Edulink_SchoolDetails';
import Edulink_Ping from '../Types/Edulink_Ping';
import School_FromCode from '../Types/School_FromCode';
import Edulink_Logout from '../Types/Edulink_Logout';
export declare class _Authentication {
    uuid: string;
    school_server: string;
    learner_id: string;
    authtoken: string;
    School_From_Code_Return: School_FromCode;
    Edulink_SchoolDetails_Return: Edulink_SchoolDetails;
    Edulink_Login_Return: Edulink_Login;
    constructor();
    initialize(school_code: string, username: string, password: string, keepAlive?: boolean): Promise<void>;
    Edulink_SchoolDetails(): Promise<Edulink_SchoolDetails>;
    School_FromCode(school_code: string, server?: string): Promise<any>;
    Edulink_Login(username: string, password: string, establishment_id: number): Promise<Edulink_Login>;
    Edulink_Logout(): Promise<Edulink_Logout>;
    Edulink_Ping(): Promise<Edulink_Ping>;
}
export default function Authentication(school_code: string, username: string, password: string): Promise<_Authentication>;
