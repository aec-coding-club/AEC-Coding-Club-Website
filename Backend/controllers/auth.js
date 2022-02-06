const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const User = require("../models/User");
const otpSender = require("./mailsender.js");
const Counter = require("../models/Counter");

//? MARK : Register Route

exports.register = async (req, res) => {
  try {
    //* Getting Data from the BODY
    const {
      firstName,
      lastName,
      email,
      password,
      contact_no,
      batch,
      branch,
      confirmPassword,
      linkedin,
      github,
    } = req.body;

    // * Checking if any Data is Missing from the BODY
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !contact_no ||
      !batch ||
      !branch ||
      !confirmPassword
    ) {
      res.status(400).json({
        success: false,
        error: "All Fields Are Required",
      });
    }

    // * Checking if Password and Confirm Password are Not Same
    if (password != confirmPassword) {
      return res.status(403).json({
        success: false,
        error: "Password and Confirm Password Does not Match",
      });
    }

    const existingUserE = await User.findOne({ email: email });
    const existingUserP = await User.findOne({ contact_no: contact_no });

    // ! Checking if the user already exists
    if (existingUserP || existingUserE) {
      return res.status(401).json({
        success: false,
        error: "User Already Exists",
      });
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
      uid = `AECCC/${branch}/${batch}/00${countupdate.seq}`;
    } else if (parseInt(countupdate.seq / 1000) === 0) {
      uid = `AECCC/${branch} /${batch}/0${countupdate.seq}`;
    } else {
      uid = `AECCC/${branch}/${batch}/${countupdate.seq}`;
    }
    console.log(uid);
    // console.log(User.count());

    // ! Sending OTP to user's email

    let otp = Math.floor(Math.random() * 100000);
    let msg = `${otp}`;
    otpSender(email, msg);

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
      linkedin: linkedin,
      github: github,
      active: false,
      otpstatus: {
        otp: otp,
        wrongTry: 0,
        timeStamp: Date.now(),
        otpRequest: 1,
        initialTimeStamp: Date.now(),
      },
    });
    console.log(user);

    const token = jwt.sign(
      {
        user_id: user.uid,
        email: user.email,
      },
      SECRET,
      {
        expiresIn: "24h",
      }
    );
    user.token = token;
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      token,
      user,
    };
    res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//? MARK : Login Route

exports.login = async (req, res) => {
  try {
    // ! MARK : ID is EMAIL or UID generated
    const { uid, password } = req.body;
    if (!uid || !password) {
      res.status(400).json({
        success: false,
        error: "Field is Missing",
      });
    }
    const user = await User.findOne({ uid });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user.uid,
          email: user.email,
        },
        SECRET,
        {
          expiresIn: "24h",
        }
      );
      user.token = token;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        token,
        user,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    }
    res.status(400).json({
      success: false,
      error: "ID or Password is incorrect",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.verifyOTP = async (req, res) => {
  const otp = req.body.otp;
  const uid = req.user.user_id;
  const email = req.user.email;
  if (otp) {
    User.findOne({ uid: uid }, function (err, docs) {
      if (docs.otpstatus && docs.active == false) {
        if (Date.now() - docs.timeStamp > 5 * 60 * 60 * 1000) {
          let otp = Math.floor(Math.random() * 100000);
          let msg = `${otp}`;
          otpSender(email, msg);

          User.updateOne(
            { uid: uid },
            {
              $set: {
                otpstatus: {
                  otp: otp,
                  wrongTry: 0,
                  timeStamp: Date.now(),
                  otpRequest: 1,
                  initialTimeStamp: Date.now(),
                },
              },
            }
          )
            .then((msg) => {})
            .catch((err) => {
              console.log(err);
            });

          res.send({ msg: "otp has been expired, new OTP has sent" });
        } else if (docs.otpstatus.wrongTry > 5) {
          if (Date.now() - docs.initialTimeStamp > 24 * 60 * 60 * 1000) {
            let otp = Math.floor(Math.random() * 100000);
            let msg = `${otp}`;
            otpSender(email, msg);

            User.updateOne(
              { uid: uid },
              {
                $set: {
                  otpstatus: {
                    otp: otp,
                    wrongTry: 0,
                    timeStamp: Date.now(),
                    otpRequest: 1,
                    initialTimeStamp: Date.now(),
                  },
                },
              }
            )
              .then((msg) => {})
              .catch((err) => {
                console.log(err);
              });
            res.send({ msg: "otp has been expired, new OTP has sent" });
          } else if (docs.otpstatus.otpRequest < 5) {
            let otp = Math.floor(Math.random() * 100000);
            let msg = `${otp}`;
            otpSender(email, msg);

            User.updateOne(
              { uid: uid },
              {
                $set: {
                  otpstatus: {
                    otp: otp,
                    wrongTry: 0,
                    timeStamp: Date.now(),
                    otpRequest: docs.otpstatus.otpRequest + 1,
                    initialTimeStamp: docs.otpstatus.initialTimeStamp,
                  },
                },
              }
            )
              .then((msg) => {})
              .catch((err) => {
                console.log(err);
              });
            res.send({ msg: "otp has been expired, new OTP has sent" });
          } else {
            return res.status(401).send({ message: "maximum attempt exeeded" });
          }
        } else if (docs.otpstatus.otp != otp) {
          console.log(docs.otpstatus.wrongTry);
          console.log("uid: " + uid);

          User.updateOne(
            { uid: uid },
            { $set: { "otpstatus.wrongTry": docs.otpstatus.wrongTry + 1 } }
          )
            .then((msg) => {})
            .catch((err) => {
              console.log(err);
            });
          return res.status(401).send({ message: "wrong otp" });
        } else {
          User.updateOne(
            { uid: uid },
            { $set: { active: true, otpstatus: null } }
          )
            .then((msg) => {})
            .catch((err) => {
              console.log(err);
            });
          return res.status(200).send({ message: "account activated" });
        }
      } else {
        res.redirect("/api/v1/dashboard");
      }
    });
  }
};