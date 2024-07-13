"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const uuid_1 = require("uuid");
const getUUID = () => (0, uuid_1.v4)();
exports.getUUID = getUUID;
