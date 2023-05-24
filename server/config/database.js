const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database successful!");
  })
  .catch((err) => {
    console.log("Unable to connect to database!", err);
  });

module.exports = sequelize;
