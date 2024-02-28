"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = require("../../../../../modules/users.repository");
const users_ioc_identifiers_1 = require("../../../../../shared/constants/users.ioc.identifiers");
exports.default = (container) => {
    container.bind(users_ioc_identifiers_1.USERS_IOC_IDS.REPOSITORY).to(users_repository_1.UsersRepository);
    return container;
};
