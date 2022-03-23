const User = require("../models/User");

exports.dashboard = async (req, res) => {
  const uid = req.user.user_id;
  const user = await User.findOne({ uid });
  const name = `${user.firstName} ${user.lastName}`;
  const user_data = {
    name: name,
    uid: uid,
    events: user.event.reverse(),
    pimage: user.profilePicture,
    branch: user.branch,
    batch: user.batch,
    email: user.email,
    role: user.role,
    zone: user.zone,
  };
  return res.json({ user_data, token: true, success: true });
};
