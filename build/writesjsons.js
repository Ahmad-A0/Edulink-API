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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const tools_1 = require("./RE_tools/tools");
const fetchlist = [
    [
        'https://www.edulinkone.com/jsons/EduLink/Login/learner/EduLink.Login.json',
        'Edulink_Login',
    ],
];
(() => __awaiter(void 0, void 0, void 0, function* () {
    for (const [url, name] of fetchlist) {
        const response = yield axios_1.default.get(url, {
            headers: {
                accept: 'application/json, text/plain, */*',
            },
        });
        if (response.status !== 200) {
            throw new Error(`${url} returned ${response.status}`);
        }
        const output_dir = path_1.default.join(__dirname, '../jsons');
        const stringified = JSON.stringify(response.data, null, 2);
        const typed_stringified = (0, tools_1.convertRoughToString)((0, tools_1.roughType)(response.data));
        (0, fs_1.writeFileSync)(path_1.default.join(output_dir, `${name}.json`), stringified);
        (0, fs_1.writeFileSync)(path_1.default.join(output_dir, `${name}.ts`), `type ${name} = ${typed_stringified};`);
    }
}))();
