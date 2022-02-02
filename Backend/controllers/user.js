const User = require("../models/User");


exports.dashboard = async (req, res) => {
    const uid = req.user.user_id
    const user = await User.findOne({ uid });
    const user_data = {
        uid: uid,
        events: user.event,
        pimage: user.profilePicture,
        branch: user.branch,
        batch: user.batch,
        email: user.email
    }
    return res.json(user_data)
}