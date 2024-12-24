const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const util = require("util");
const jwt = require("jsonwebtoken");
const AdminModel = require("../models/AdminModel");
let token;
exports.protect = asyncErrorHandler(async (req, res, next) => {
  console.log("protect entered");
  // 1. read the token & check if exist
  const testToken = req.headers.authorization;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  console.log(token);
  if (
    !token ||
    token == null ||
    token == undefined ||
    token == "undefined" ||
    token == "null"
  ) {
    res.status(401).json("you are not logged in!");
  }

  // 2. validate the token

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECRET_STR
  );

  const admin = await AdminModel.findById(decodedToken.id);

  if (!admin) {
    res.status(401).json("the admin with the given token does not exist");
  }

  // 4. if the Admin changeed password after the token was issued
  if (await admin.isPasswordChanged(decodedToken.iat)) {
    res
      .status(401)
      .json("the password has been changed recently. please login again");
  }
  // 5. allow Admin to access route
  req.admin = admin;

  next();
});

exports.isAdmin = asyncErrorHandler(async (req, res, next) => {
  if (!req.admin.isAdmin) {
    return res.status(403).json({ msg: "User is not an admin" });
  }
  next();
});
