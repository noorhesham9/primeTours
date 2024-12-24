const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const adminschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validator: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
      },
    },
    password: { type: String, required: true },
    confirmPassword: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function (v) {
          return this.password === v;
        },
        message: "Passwords do not match",
      },
    },
    role: { type: String, default: "user" },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

adminschema.pre("save", async function (next) {
  console.log("pre save");
  if (!this.isModified("password")) return next();
  console.log("crypr");
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

adminschema.methods.hashPassword = async function (pass) {
  return await bcrypt.hash(pass, 12);
};
adminschema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpires = Date.now() + 100 * 60 * 1000;

  return resetToken;
};

adminschema.methods.comparePasswordInDB = async function (pswd, pswdDB) {
  return await bcrypt.compare(pswd, pswdDB);
};

adminschema.methods.isPasswordChanged = async function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const pswdChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < pswdChangedTimestamp;
  }
  return false;
};

module.exports = mongoose.model("admins", adminschema);
