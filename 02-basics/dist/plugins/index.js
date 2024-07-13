"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.getAge = exports.getUUID = void 0;
var get_id_plugin_1 = require("./get-id.plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.http; } });
