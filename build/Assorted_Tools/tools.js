"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = exports.method_server_url = exports.handleResponse = exports.convertRoughToString = exports.roughType = void 0;
const url_1 = require("url");
const uuid_1 = require("uuid");
function roughType(object) {
    let rough = {};
    if (object instanceof Array) {
        rough = object.map((item) => roughType(item));
    }
    else if (object instanceof Object) {
        for (const key in object) {
            rough[key] = roughType(object[key]);
        }
    }
    else {
        rough = typeof object;
    }
    return rough;
}
exports.roughType = roughType;
function convertRoughToString(rough) {
    return JSON.stringify(rough, null, 4)
        .replace(/"string"/g, 'string')
        .replace(/"boolean"/g, 'boolean')
        .replace(/"number"/g, 'number');
}
exports.convertRoughToString = convertRoughToString;
function handleResponse(response, output_full = false) {
    if (response.status !== 200) {
        throw new Error('Authentication failed with status code: ' +
            response.status +
            ' ' +
            response.statusText +
            '\n' +
            output_full
            ? response.data
            : '');
    }
    return response.data;
}
exports.handleResponse = handleResponse;
function method_server_url(method, server, method_prepend = '/api/?method=') {
    return new url_1.URL(`${method_prepend}${method}`, server).toString();
}
exports.method_server_url = method_server_url;
function uuid() {
    return (0, uuid_1.v4)();
}
exports.uuid = uuid;
