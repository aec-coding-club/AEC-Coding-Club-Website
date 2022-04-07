const mongoose = require('mongoose')

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
    type: String,
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
  zone: {
    type: String,
    default: 'White',
  },
  profilePicture: {
    type: String,
    default: 'https://res.cloudinary.com/sahebcloud/image/upload/v1644605990/dummypic_vns8f6.jpg',
  },
  linkedin: { type: String, default: 'https://www.linkedin.com' },
  github: { type: String, default: 'https://github.com/' },
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
  timeStamp: { type: Number, default: Date.now() },
})

module.exports = mongoose.model('user', userSchema)
