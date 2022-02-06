const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
    required: true,
  },
  lastName: {
    type: String,
    default: null,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contact_no: {
    type: String,
    unique: true,
    required: true,
    maxLength: 10,
    minLength: 10,
  },
  branch: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  role: {
    type: Number,
    default: 0,
  },
  profilePicture: {
    type: String,
    default:
      "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
  },
  linkedin: { type: String, default: "https://www.linkedin.com" },
  github: { type: String, default: "https://github.com/" },
  event: {
    type: Array,
  },
  uid: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  count: { type: Number },
  active: { type: Boolean },
  otpstatus: {
    otp: { type: String },
    wrongTry: { type: Number },
    timeStamp: { type: Number },
    otpRequest: { type: Number },
    initialTimeStamp: { type: Number },
  },
});

module.exports = mongoose.model("user", userSchema);
