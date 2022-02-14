const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: true,
    },
    eventDetails: {
      type: String,
      required: true,
    },
    eventImage: {
      type: String,
      required: true,
    },
    eventTime: {
      type: Date,
      required: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
