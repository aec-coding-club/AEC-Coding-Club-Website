const Elog = require("../models/Eventlog");

const getlogs = async (req, res) => {
  try {
    const logs = await Elog.find({});
    console.log(logs);
    res.status(200).json({ logs: logs.reverse(), length: logs.length });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
      error: "Some Error in Showing Logs",
    });
  }
};

module.exports = getlogs;
