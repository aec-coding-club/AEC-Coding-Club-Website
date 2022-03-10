const Elog = require("../models/Eventlog");
const Counter = require("../models/Counter");
const User = require("../models/User");
exports.getlogs = async (req, res) => {
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

exports.branchdata = async (req, res) => {
  try {
    const cse = await User.count({ branch: "CSE" });
    const it = await User.count({ branch: "IT" });
    const ee = await User.count({ branch: "EE" });
    const ece = await User.count({ branch: "ECE" });
    const csbs = await User.count({ branch: "CSBS" });
    const aiml = await User.count({ branch: "AIML" });
    const ce = await User.count({ branch: "CE" });
    const me = await User.count({ branch: "ME" });
    const aeie = await User.count({ branch: "AEIE" });
    const bba = await User.count({ branch: "BBA" });
    const bca = await User.count({ branch: "BCA" });
    const mca = await User.count({ branch: "MCA" });
    branch = [cse, it, ece, csbs, aiml, ce, me, aeie, bba, bca, mca];
    var total = 0;
    for (var i = 0; i < branch.length; i++) {
      total += branch[i];
    }
    console.log(branch);
    res.json({
      CSE: cse,
      IT: it,
      ECE: ece,
      EE: ee,
      CSBS: csbs,
      AIML: aiml,
      CE: ce,
      ME: me,
      AEIE: aeie,
      BBA: bba,
      BCA: bca,
      MCA: mca,
      Total: total,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ error: error.message });
  }
};

exports.yeardata = async (req, res) => {
  try {
    const d = new Date();
    let year = d.getFullYear();
    const fourth = await User.count({ batch: `${year}` });
    const third = await User.count({ batch: `${year + 1}` });
    const second = await User.count({ batch: `${year + 2}` });
    const first = await User.count({ batch: `${year + 3}` });
    res.json({ first: first, second: second, third: third, fourth: fourth });
  } catch (err) {
    res.json({
      message: err.message,
      error: "Date Wise Data is Not Available",
    });
  }
};

