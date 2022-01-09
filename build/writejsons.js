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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const tools_1 = require("./Assorted_Tools/tools");
(() => __awaiter(void 0, void 0, void 0, function* () {
    for (const file of (0, fs_1.readdirSync)(path_1.default.join(__dirname, '../jsons/'))) {
        console.log(file);
        const name = file.split('.')[0];
        const output_dir = path_1.default.join(__dirname, '../jsons/');
        const object = JSON.parse((0, fs_1.readFileSync)(path_1.default.join(output_dir, name + '.json'), 'utf8'));
        const typed_stringified = (0, tools_1.convertRoughToString)((0, tools_1.roughType)(object));
        (0, fs_1.writeFileSync)(path_1.default.join(output_dir, `${name}.ts`), `type ${name} = ${typed_stringified};`);
    }
}))();
