const express = require("express");
const router = express.Router();
const messageController = require("./../controllers/messageController");
const reservationController = require("./../controllers/reservattionController");
const userController = require("./../controllers/userController");
const utilContrller = require("./../controllers/UtilController");
router.route("/login").post(userController.login);
router.route("/register").post(userController.register);
router
  .route("/responseMessage/:id")
  .patch(
    utilContrller.protect,
    utilContrller.isAdmin,
    messageController.responseMessage
  );
router
  .route("/changeFromUserToAdmin/:id")
  .patch(
    utilContrller.protect,
    utilContrller.isAdmin,
    messageController.changeFromUserToAdmin
  );
router
  .route("/DeleteUserFromDB/:id")
  .delete(
    utilContrller.protect,
    utilContrller.isAdmin,
    messageController.DeleteUserFormDB
  );
router
  .route("/getAllMessages")
  .get(
    utilContrller.protect,
    utilContrller.isAdmin,
    messageController.getAllMessages
  );
router
  .route("/getAllreservations")
  .get(
    utilContrller.protect,
    utilContrller.isAdmin,
    reservationController.getAllReservations
  );

module.exports = router;
