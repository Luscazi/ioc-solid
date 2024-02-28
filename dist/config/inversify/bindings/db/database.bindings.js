"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../../db/database");
const database_ioc_identifiers_1 = require("../../../../shared/constants/database.ioc.identifiers");
exports.default = (container) => {
    container.bind(database_ioc_identifiers_1.DATABASE_IOC_IDS.DATABASE).to(database_1.Database);
    return container;
};
