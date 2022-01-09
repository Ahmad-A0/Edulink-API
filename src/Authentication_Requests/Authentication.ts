import axios from 'axios';

import Edulink_Login from '../Types/Edulink_Login';
import Edulink_SchoolDetails from '../Types/Edulink_SchoolDetails';
import Edulink_Ping from '../Types/Edulink_Ping';
import School_FromCode from '../Types/School_FromCode';

import {
    handleResponse,
    method_server_url,
    uuid,
} from '../Assorted_Tools/tools';
import Edulink_Logout from '../Types/Edulink_Logout';

export default class Authentication {
    uuid!: string;
    school_server!: string;
    learner_id!: string;
    authtoken!: string;

    School_From_Code_Return!: School_FromCode;
    Edulink_SchoolDetails_Return!: Edulink_SchoolDetails;
    Edulink_Login_Return!: Edulink_Login;

    keepAlive!: NodeJS.Timeout;

    constructor() {}

    async initialize(
        school_code: string,
        username: string,
        password: string,
        keepAlive: boolean = true
    ) {
        this.uuid = uuid();

        this.School_From_Code_Return = await this.School_FromCode(school_code);
        this.school_server = this.School_From_Code_Return.result.school.server;

        this.Edulink_SchoolDetails_Return = await this.Edulink_SchoolDetails();

        this.Edulink_Login_Return = await this.Edulink_Login(
            username,
            password,
            this.Edulink_SchoolDetails_Return.result.establishment.id
        );

        this.learner_id = this.Edulink_Login_Return.result.user.id;
        this.authtoken = this.Edulink_Login_Return.result.authtoken;

        if (keepAlive) {
            this.keepAlive = setInterval(() => {
                this.Edulink_Ping();
            }, 1000 * 60 * 5);
        }
    }

    async Edulink_SchoolDetails(): Promise<Edulink_SchoolDetails> {
        const url = method_server_url(
            'Edulink.SchoolDetails',
            this.school_server
        );

        const response = await axios.post(
            url,
            {
                jsonrpc: '2.0',
                method: 'EduLink.SchoolDetails',
                params: {
                    from_app: false,
                },
                uuid: this.uuid,
                id: '1',
            },
            {
                headers: {
                    'X-API-Method': 'EduLink.SchoolDetails',
                },
            }
        );

        return handleResponse(response);
    }

    async School_FromCode(school_code: string, server?: string) {
        const url = method_server_url(
            'School.FromCode',
            server ?? 'https://provisioning.edulinkone.com/',
            '?method='
        );

        const response = await axios.post(url, {
            jsonrpc: '2.0',
            method: 'School.FromCode',
            params: {
                code: school_code,
            },
            uuid: this.uuid,
            id: '1',
        });

        return handleResponse(response);
    }

    async Edulink_Login(
        username: string,
        password: string,
        establishment_id: number
    ): Promise<Edulink_Login> {
        const url = method_server_url('Edulink.Login', this.school_server);

        const response = await axios.post(
            url,
            {
                jsonrpc: '2.0',
                method: 'EduLink.Login',
                params: {
                    establishment_id: establishment_id.toString(),
                    from_app: false,
                    username: username,
                    password: password,
                    remember_me: false,
                },
                uuid: this.uuid,
                id: '1',
            },
            {
                headers: {
                    'X-API-Method': 'EduLink.Login',
                },
            }
        );

        return handleResponse(response);
    }

    async Edulink_Logout(): Promise<Edulink_Logout> {
        const url = method_server_url('EduLink.Logout', this.school_server);

        const response = await axios.post(
            url,
            {
                jsonrpc: '2.0',
                method: 'EduLink.Logout',
                params: {},
                uuid: this.uuid,
                id: '1',
            },
            {
                headers: {
                    'X-API-Method': 'EduLink.Logout',
                    Authorization: `Bearer ${this.authtoken}`,
                },
            }
        );

        clearInterval(this.keepAlive);

        return handleResponse(response);
    }

    async Edulink_Ping(): Promise<Edulink_Ping> {
        const url = method_server_url('EduLink.Ping', this.school_server);

        const response = await axios.post(url, {
            jsonrpc: '2.0',
            method: 'EduLink.Ping',
            params: {},
            uuid: this.uuid,
            id: '1',
        });

        return handleResponse(response);
    }
}
