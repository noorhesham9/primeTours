const express = require("express");
const router = express.Router();
const messageController = require("./../controllers/messageController");
const reservationController = require("./../controllers/reservattionController");
router.route("/sentMessage").post(messageController.sentMessage);
router.route("/sentreservation").post(reservationController.sentreservation);
module.exports = router;
