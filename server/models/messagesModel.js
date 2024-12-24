const mongoose = require("mongoose");
const validator = require("validator");
const messagesSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email address",
      },
    },
    phoneNumber: {
      type: String,

      validate: {
        validator: function (v) {
          return validator.isMobilePhone(v, "ar-EG");
        },
        message: "{VALUE} is not a valid phone number",
      },
    },
    message: String,

    responseStatus: {
      type: Boolean,
      default: false,
    },
    response: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("messages", messagesSchema);
