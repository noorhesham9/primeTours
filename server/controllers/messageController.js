const asyncErrorHandler = require("./../utils/asynsErrorHandler");
const Messages = require("./../models/messagesModel");
const sendEmail = require("./../utils/email");
const Admin = require("./../models/AdminModel");

exports.sentMessage = asyncErrorHandler(async (req, res) => {
  const { name, email, Phone, message } = req.body;
  const newMessage = new Messages({ name, email, phoneNumber: Phone, message });
  await newMessage.save();
  res
    .status(200)
    .json({ message: "Message sent successfully", data: newMessage });
});
exports.responseMessage = asyncErrorHandler(async (req, res) => {
  const message = await Messages.findById(req.params.id);
  message.response = req.body.response;
  message.responseStatus = true;
  if (!message) return res.status(404).json({ message: "Message not found" });
  await message.save();

  // await sendEmail({
  //   email: message.email,
  //   subject: "response message",
  //   message: message.response,
  // });
  res.json({
    message: "Message updated successfully and response is sent",
    data: message,
  });
});

exports.changeFromUserToAdmin = asyncErrorHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) return res.status(404).json({ message: "User not found" });
  if (admin.isAdmin) {
    return res.status(403).json({ message: "User is already an admin" });
  }
  admin.role = "admin";
  admin.isAdmin = true;

  await admin.save();
  res.json({ message: "User changed successfully", data: admin });
});

exports.DeleteUserFormDB = asyncErrorHandler(async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});

exports.getAllMessages = asyncErrorHandler(async (req, res) => {
  const messages = await Messages.find({});
  res.json({ data: messages });
});
