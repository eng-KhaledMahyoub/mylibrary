const dotenv = require("dotenv");
dotenv.config();
//  connect to postgre database using the npm package "pg"
const Pool = require("pg").Pool;
const pool = new Pool({
  host: process.env.POSTGRE_HOST, // Postgres ip address[s] or domain name[s]
  port: process.env.POSTGRE_PORT, // Postgres server port[s]
  database: process.env.POSTGRE_DB, // Name of database to connect to
  username: process.env.POSTGRE_USERNAME, // Username of database user
  password: process.env.POSTGRE_PASSWORD, // Password of database user
});

module.exports = pool;
