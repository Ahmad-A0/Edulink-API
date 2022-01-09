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
const Authentication_1 = __importDefault(require("./Authentication/Authentication"));
const Edulink_1 = __importDefault(require("./Edulink/Edulink"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../.env'),
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(process.env.EDULINK_SCHOOL_ID);
    const auth = yield (0, Authentication_1.default)(process.env.EDULINK_SCHOOL_ID, process.env.EDULINK_USERNAME, process.env.EDULINK_PASSWORD);
    const edulink = yield (0, Edulink_1.default)(auth);
    console.log(yield edulink.Achievement());
    console.log(yield auth.Edulink_Logout());
    console.log(yield edulink.Achievement());
}))();
