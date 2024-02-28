"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_config_1 = __importDefault(require("./config/inversify/inversify.config"));
require("./config/routes");
const app = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.default);
const server = app.build();
const port = 3333;
server.listen(port, () => {
    console.log(`Server is listen in ${port} 🚀`);
});
