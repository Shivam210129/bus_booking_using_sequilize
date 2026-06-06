const { Booking, User, Bus } = require("../models");

exports.createBooking = async (req, res) => {
  const { userId, busId, seatNumber } = req.body;

  const user = await User.findByPk(userId);
  const bus = await Bus.findByPk(busId);

  if (!user || !bus) {
    return res.status(404).json({
      message: "User or Bus not found",
    });
  }

  const booking = await Booking.create({
    userId,
    busId,
    seatNumber,
  });

  res.status(201).json(booking);
};