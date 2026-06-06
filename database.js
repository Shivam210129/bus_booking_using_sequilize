const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "bus_booking_db",
  "root",
  "Root@123",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Connection error:", err));