const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);

router.get(
  "/:id/bookings",
  userController.getUserBookings
);

module.exports = router;