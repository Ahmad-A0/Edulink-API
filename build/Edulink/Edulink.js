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
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const tools_1 = require("../Assorted_Tools/tools");
class _Edulink {
    initalize(Authentication) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Authentication = Authentication;
            this.generic_header = {
                Authorization: `Bearer ${this.Authentication.authtoken}`,
            };
            this.learner_id = this.Authentication.learner_id;
        });
    }
    get generic_data() {
        return {
            jsonrpc: '2.0',
            id: 1,
            uuid: (0, tools_1.uuid)(),
        };
    }
    Timetable(date = (0, moment_1.default)().format('YYYY-MM-DD')) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Timetable', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Timetable', params: {
                    date: date,
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Timetable' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Documents() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Documents', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Documents', params: {
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Documents' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Exams() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Exams', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Exams', params: {
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Exams' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Behaviour() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Behaviour', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Behaviour', params: {
                    learner_id: this.learner_id,
                    format: 2,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Behaviour' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    AchievementBehaviourLookups() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.AchievementBehaviourLookups', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.AchievementBehaviourLookups', params: {} }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.AchievementBehaviourLookups' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    RegisterCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.RegisterCodes', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.RegisterCodes', params: {} }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.RegisterCodes' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Achievement() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Achievement', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Achievement', params: {
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Achievement' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Attendance() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Attendance', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Attendance', params: {
                    learner_id: this.learner_id,
                    format: 3,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Attendance' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Catering() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Catering', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Catering', params: {
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Catering' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Homework() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Homework', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Homework', params: {
                    format: 2,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Homework' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    ExternalLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.ExternalLinks', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.ExternalLinks', params: {} }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.ExternalLinks' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Clubs(member = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Clubs', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Clubs', params: {
                    learner_id: this.learner_id,
                    member: member,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Clubs' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Personal() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Personal', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Personal', params: {
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Personal' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    Status() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.Status', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.Status', params: {
                    last_visible: 0,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.Status' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
    TeacherPhotos() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (0, tools_1.method_server_url)('Edulink.TeacherPhotos', this.Authentication.school_server);
            const response = yield axios_1.default.post(url, Object.assign({ method: 'EduLink.TeacherPhotos', params: {
                    learner_id: this.learner_id,
                } }, this.generic_data), {
                headers: Object.assign({ 'X-API-Method': 'EduLink.TeacherPhotos' }, this.generic_header),
            });
            return (0, tools_1.handleResponse)(response);
        });
    }
}
function EduLink(Authentication) {
    return __awaiter(this, void 0, void 0, function* () {
        const edulink = new _Edulink();
        yield edulink.initalize(Authentication);
        return edulink;
    });
}
exports.default = EduLink;
