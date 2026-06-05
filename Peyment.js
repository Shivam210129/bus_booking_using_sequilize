const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  paymentStatus: {
    type: DataTypes.STRING,
    defaultValue: "Pending",
  },
});

module.exports = Payment;