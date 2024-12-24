const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const Reservation = require("./../models/reservationModel");

exports.sentreservation = asyncErrorHandler(async (req, res) => {
  const { date, time, numPeople, fullName, email, phoneNumber, notes } =
    req.body;
  const newReservation = new Reservation({
    date,
    time,
    numPeople,
    fullName,
    email,
    phoneNumber,
    notes,
  });
  await newReservation.save();
  res.status(201).json({
    success: true,
    data: newReservation,
  });
});

exports.getAllReservations = asyncErrorHandler(async (req, res) => {
  const reservations = await Reservation.find({});
  res.json({ data: reservations });
});
