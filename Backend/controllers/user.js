const User = require("../models/User");

exports.dashboard = async (req, res) => {
  const uid = req.user.user_id;
  const user = await User.findOne({ uid });
  const name = `${user.firstName} ${user.lastName}`;
  const user_data = {
    name: name,
    uid: uid,
    events: user.event,
    pimage: user.profilePicture,
    branch: user.branch,
    batch: user.batch,
    email: user.email,
    success : true
  };
  return res.json(user_data);
};
