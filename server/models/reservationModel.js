const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    numPeople: {
      type: Number,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validator: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "ar-EG");
        },
        message: "{VALUE} is not a valid phone number",
      },
    },
    notes: {
      type: String,
      required: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reservations", reservationSchema);
