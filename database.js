const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "bus booking usnig sequlize",
  "root",
  "Root@123",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;