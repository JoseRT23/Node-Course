"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
exports.http = {
    get: async (url) => {
        const { data } = await (0, axios_1.default)(url);
        return data;
        // const response = await fetch(url);
        // return await response.json();
    },
    post: async (url, body) => {
        throw new Error('Not implemented');
    },
    put: async (url, body) => {
        throw new Error('Not implemented');
    },
    delete: async (url) => {
        throw new Error('Not implemented');
    },
};
