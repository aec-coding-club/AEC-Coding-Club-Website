const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
  seq: {
    type: Number,
    default: 1,
  },
  branch: {
    type: String,
  },
  batch: {
    type: Number,
  },
  notActive: [{ id: String }],
});

module.exports = mongoose.model("Counter", CounterSchema);
