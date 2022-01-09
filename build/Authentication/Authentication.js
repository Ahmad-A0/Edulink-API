"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Authentication = void 0;
const axios_1 = __importDefault(require("axios"));
const tools_1 = require("../Assorted_Tools/tools");
class _Authentication {
    constructor() { }
    initialize(school_code, username, password, keepAlive = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this.uuid = (0, tools_1.uuid)();
            this.School_From_Code_Return = yield this.School_FromCode(school_code);
            this.school_server = this.School_From_Code_Return.result.school.server;
            this.Edulink_SchoolDetails_Return = yield this.Edulink_SchoolDetails();
            this.Edulink_Login_Return = yield this.Edulink_Login(username, password, this.Edulink_SchoolDetails_Return.result.establishment.id);
            this.learner_id = this.Edulink_Login_Return.result.user.id;
            this.authtoken = this.Edulink_Login_Return.result.authtoken;
            if (keepAlive) {
                setInterval(() => {
                    this.Edulink_Ping();
                }, 1000 * 60 * 5);
            }
        });
    }
    Edulink_SchoolDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.SchoolDetails', this.school_server);
            const response = yield axios_1.default.post(url, {
                jsonrpc: '2.0',
                method: 'EduLink.SchoolDetails',
                params: {
                    from_app: false,
                },
                uuid: this.uuid,
                id: '1',
            }, {
                headers: {
                    'X-API-Method': 'EduLink.SchoolDetails',
                },
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    School_FromCode(school_code, server) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('School.FromCode', server !== null && server !== void 0 ? server : 'https://provisioning.edulinkone.com/', '?method=');
            const response = yield axios_1.default.post(url, {
                jsonrpc: '2.0',
                method: 'School.FromCode',
                params: {
                    code: school_code,
                },
                uuid: this.uuid,
                id: '1',
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Edulink_Login(username, password, establishment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Login', this.school_server);
            const response = yield axios_1.default.post(url, {
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
            }, {
                headers: {
                    'X-API-Method': 'EduLink.Login',
                },
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Edulink_Logout() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('EduLink.Logout', this.school_server);
            const response = yield axios_1.default.post(url, {
                jsonrpc: '2.0',
                method: 'EduLink.Logout',
                params: {},
                uuid: this.uuid,
                id: '1',
            }, {
                headers: {
                    'X-API-Method': 'EduLink.Logout',
                    Authorization: `Bearer ${this.authtoken}`,
                },
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Edulink_Ping() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('EduLink.Ping', this.school_server);
            const response = yield axios_1.default.post(url, {
                jsonrpc: '2.0',
                method: 'EduLink.Ping',
                params: {},
                uuid: this.uuid,
                id: '1',
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
}
exports._Authentication = _Authentication;
function Authentication(school_code, username, password, keepAlive = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const auth = new _Authentication();
        yield auth.initialize(school_code, username, password, keepAlive);
        return auth;
    });
}
exports.default = Authentication;
