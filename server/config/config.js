const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  dialect: "mysql",
};
