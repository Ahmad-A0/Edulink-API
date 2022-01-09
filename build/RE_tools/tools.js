"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRoughToString = exports.roughType = void 0;
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
