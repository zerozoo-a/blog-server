import mysql from 'mysql2/promise';
import { Pool, PoolOptions } from 'mysql2/typings/mysql';

interface Config {
  host: string;
  user: string;
  password: string;
  database: string;
}

// const config :Config= {
//   host: process.env.DB_HOST as string,
//   user: process.env.DB_USER as string,
//   password: process.env.PASSWORD as string,
//   database: process.env.USE_DB as string,
// };
// async function con() {
//   const pool = mysql.createPool(config);
//   return pool;
// }
class Pooler {
  private config: PoolOptions = {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.PASSWORD as string,
    database: process.env.USE_DB as string,
  };
  public pool;

  constructor() {
    this.pool = mysql.createPool(this.config);
  }
}

export default Pooler;
