const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Counter = require("../models/Counter");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, contact_no, batch, branch } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !contact_no ||
      !batch ||
      !branch
    ) {
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

    // ! Injecting the Counter Part
    let countupdate
    const count = await Counter.findOne({ branch: branch, batch : batch });
    if(!count){
        const countfresh = await Counter.create({seq : 1, branch: branch, batch : batch});
        console.log("New Counter Created", countfresh);
        const countfreshfind = await Counter.findOne({ branch: branch, batch : batch });
        console.log("Here is my Counter : ", countfreshfind);
        countupdate = await Counter.findByIdAndUpdate(
            { _id: countfreshfind._id },
            { $inc: { seq: 1 } }
        );
        console.log(countupdate);
    }
    else{
        console.log("Here is my Counter : ", count);
        countupdate = await Counter.findByIdAndUpdate(
          { _id: count._id },
          { $inc: { seq: 1 } }
        );
        console.log(countupdate);
    }



    const uid = `AECCC/${branch}/${batch}/${countupdate.seq}`;
    console.log(uid);
    // console.log(User.count());

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
      res.status(400).json({error : error.message});
  }
};
