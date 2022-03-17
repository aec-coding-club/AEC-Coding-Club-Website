const mongoose = require("mongoose");

const Elog = new mongoose.Schema({
  Operation: {
    type: String,
  },
  updatedby: { type: String },
  userName: { type: String },
  eventTitle: { type: String },
  eventDescription: { type: String },
  image: { type: String },
  updatedAt: { type: Date },
});

module.exports = mongoose.model("Elog", Elog);
