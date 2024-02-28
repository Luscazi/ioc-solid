"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const database_bindings_1 = __importDefault(require("./bindings/db/database.bindings"));
const users_bindings_1 = __importDefault(require("./bindings/modules/users/users.bindings"));
const container = (0, lodash_1.flow)(database_bindings_1.default, users_bindings_1.default)(new inversify_1.Container());
exports.default = container;
