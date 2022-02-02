"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sql = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
// export const con = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.PASSWORD,
// });
//  const connection =
class Sql {
    constructor() {
        this.con();
    }
    con() {
        promise_1.default.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.PASSWORD,
            connectionLimit: 4,
            database: process.env.USE_DB,
        });
    }
}
exports.Sql = Sql;
//# sourceMappingURL=connection.js.map