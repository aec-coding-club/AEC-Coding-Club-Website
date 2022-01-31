const bcrypt = require("bcryptjs");
const User = require("../models/User");
exports.register = async (req, res) => {
    const { firstName, lastName, email, password, contact_no, batch, branch } = req.body;
    if (!firstName || !lastName || !email || !password || !contact_no || !batch || !branch) {
        res.status(400).json({ error: "All Fields Are Required" });
    }
    const existingUserE = await User.findOne({ email: email });
    const existingUserP = await User.findOne({ contact_no: contact_no });
    if (existingUserP || existingUserE) {
        res.status(401).json({ error: "User Already Exists" });
    }
    const myEncryPassword = await bcrypt.hash(password, 10);
    // count = mongoose.count()
    // console.log(count);

    const uid = `AECCC/${branch}/${batch}/`
    console.log(uid);
    console.log(User.count());
    const user = await User.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        contact_no,
        batch,
        branch,
        password: myEncryPassword,
        uid: uid
    });
    console.log(user);
    res.send(user);
};
