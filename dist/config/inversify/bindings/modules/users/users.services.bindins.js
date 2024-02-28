"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("../../../../../modules/users.service");
const users_ioc_identifiers_1 = require("../../../../../shared/constants/users.ioc.identifiers");
exports.default = (container) => {
    container.bind(users_ioc_identifiers_1.USERS_IOC_IDS.SERVICE).to(users_service_1.UsersService);
    return container;
};
