const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Elog = new Schema(
  {
    history: { type: Array }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Elog', Elog);