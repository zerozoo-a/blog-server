"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(routes) {
        (this.app = (0, express_1.default)()), (this.port = 3001);
        this.env = process.env.PORT || 'development';
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
    listen() {
        this.app
            .listen(this.port, () => {
            console.log(`express listen on PORT: ${this.port}
	🚀 goto : http://localhost:${this.port}/
	`);
        })
            .on('error', (error) => {
            console.error('error: ', error);
            this.app.listen(this.port + 1);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map