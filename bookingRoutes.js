const router = require("express").Router();
const bookingController = require("../controllers/bookingController");

router.post("/", bookingController.createBooking);

module.exports = router;