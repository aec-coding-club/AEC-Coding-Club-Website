const User = require("../models/User");

exports.dashboard = async (req, res) => {
  try {
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
    };
    console.log(`Server Route is Being Used`);
    return res.json({ user_data, success: true });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};
