"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = new app_1.default([new user_route_1.default(), new index_route_1.default()]);
app.listen();
//# sourceMappingURL=index.js.map