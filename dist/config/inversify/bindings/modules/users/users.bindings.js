"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const users_repositories_bindins_1 = __importDefault(require("./users.repositories.bindins"));
const users_services_bindins_1 = __importDefault(require("./users.services.bindins"));
exports.default = (container) => (0, lodash_1.flow)(users_repositories_bindins_1.default, users_services_bindins_1.default)(container);
