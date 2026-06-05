const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  bookingDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },

  seatsBooked: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Booking;