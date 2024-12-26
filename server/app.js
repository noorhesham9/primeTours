const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cookiesMiddleware = require("universal-cookie-express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const UserRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

let app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cookiesMiddleware());
app.use(express.static("./public"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    withCredentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" }); // Welcome message for any unmatched route
});
app.use("/user", UserRoute);
app.use("/admin", adminRoute);
app.use(express.static("public"));

module.exports = app;
