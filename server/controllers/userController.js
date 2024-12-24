const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const Admin = require("./../models/AdminModel");
const asynsErrorHandler = require("./../utils/asynsErrorHandler");

const jwt = require("jsonwebtoken");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};
exports.login = asynsErrorHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  const admin = await Admin.findOne({ email }).select("+password");
  if (!admin) return res.status(400).json({ msg: "User not found" });
  console.log(admin);
  if (
    !admin ||
    !(await admin.comparePasswordInDB(req.body.password, admin.password))
  ) {
    return res.status(401).json({ msg: "Invalid email or password" });
  }
  const token = signToken(admin._id);
  res
    .status(200)
    .cookie("jwt", token, {})
    .json({ data: admin, msg: "User logged in successfully", token: token });
});

exports.register = asynsErrorHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  const adminnn = await Admin.findOne({ email });
  if (adminnn) return res.status(400).json({ msg: "Email already exists" });
  const newAdmin = new Admin({ name, email, password, confirmPassword });

  const token = signToken(newAdmin._id);
  await newAdmin.save();
  res
    .status(200)
    .cookie("jwt", token, {})
    .json({ data: newAdmin, msg: "User logged in successfully", token: token });
});
