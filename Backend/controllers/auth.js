const bcrypt = require("bcryptjs");
const User = require("../models/User");

const Counter = require("../models/Counter");

exports.register = async (req, res) => {
    try {

        //* Getting Data from the BODY
        const { firstName, lastName, email, password, contact_no, batch, branch, confirmPassword, } = req.body;

        // * Checking if any Data is Missing from the BODY
        if (!firstName || !lastName || !email || !password || !contact_no || !batch || !branch || !confirmPassword) {
            res.status(400).json({ error: "All Fields Are Required" });
        }

        // * Checking if Password and Confirm Password are Not Same
        if (password != confirmPassword) {
            return res
                .status(403)
                .json({ error: "Password and Confirm Password Does not Match" });
        }

        const existingUserE = await User.findOne({ email: email });
        const existingUserP = await User.findOne({ contact_no: contact_no });
        
        // ! Checking if the user already exists
        if (existingUserP || existingUserE) {
            return res.status(401).json({ error: "User Already Exists" });
        }
        const myEncryPassword = await bcrypt.hash(password, 10);

        // ! Injecting the Counter Part
        let countupdate;
        const count = await Counter.findOne({ branch: branch, batch: batch });
        if (!count) {
            const countfresh = await Counter.create({
                seq: 1,
                branch: branch,
                batch: batch,
            });
            console.log("New Counter Created", countfresh);
            const countfreshfind = await Counter.findOne({
                branch: branch,
                batch: batch,
            });
            console.log("Here is my Counter : ", countfreshfind);
            countupdate = await Counter.findByIdAndUpdate(
                { _id: countfreshfind._id },
                { $inc: { seq: 1 } }
            );
            console.log(countupdate);
        } else {
            console.log("Here is my Counter : ", count);
            countupdate = await Counter.findByIdAndUpdate(
                { _id: count._id },
                { $inc: { seq: 1 } }
            );
            console.log(countupdate);
        }
        // countupdate.seq = countupdate.seq + 0000

        // ! FORMATTING THE UID in Correct FORMAT
        let uid;

        if (parseInt(countupdate.seq / 10) === 0) {
            uid = `AECCC/${branch}/${batch}/000${countupdate.seq}`;
        } else if (parseInt(countupdate.seq / 100) === 0) {
            uid = `AECCC/${branch}/${batch}/00${countupdate.seq} `;
        } else if (parseInt(countupdate.seq / 1000) === 0) {
            uid = `AECCC/${branch} /${batch}/0${countupdate.seq} `;
        } else {
            uid = `AECCC/${branch}/${batch}/${countupdate.seq} `;
        }
        console.log(uid);
        // console.log(User.count());
        // ! Creating User in DB
        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            contact_no,
            batch,
            branch,
            password: myEncryPassword,
            uid: uid,
        });
        console.log(user);
        res.send(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
