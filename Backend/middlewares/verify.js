const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticated = (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    if (!token || token == undefined) {
      return res.status(403).json({
        success: false,
        token: false,
        message: "Token is Missing Please Sign In to Continue",
      });
    }
    try {
      const info = jwt.verify(token, process.env.SECRET);
      console.log(info);
      req.user = info;
    } catch (error) {
      return res.json({
        success: false,
        token: false,
        message: "Invalid Token",
      });
    }
    next();
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      token: false,
      message: "Something Went Wrong token can't be Verified Please Try Again",
    });
  }
};

exports.isActivated = async (req, res, next) => {
  try {
    console.log(`IS ACTIVATED MIDDLEWARE IS INVOKED`);
    uid = req.user.user_id;
    let user = await User.findOne({ uid: uid });
    console.log(user);
    // console.log(req.user);
    if (user.active == false) {
      return res.json({
        success: "false",
        token: true,
        message: "E-Mail is Not Verified",
      });
      ///should be res.redirect()
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, token: true, error: error.message });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    uid = req.user.user_id; // getting the User Details from the Middleware as isAuthenticated middleware is invoked before this
    let user = await User.findOne({ uid: uid });
    console.log(user);
    if (user.role === 3) {
      req.role = "admin"; //! Teachers Privilage
       next();
    } else if (user.role === 2) {
      req.role = "core"; //! Core Committee Member
       next();
    } else if (user.role === 1) {
      req.role = "sub"; //! Sub Committee Member
      return res.json({
        success: false,
        message: "Protected Route Only For Admins",
      });
    } else {
      req.role = "user"; //! Normal User or Student
      return res.json({
        success: false,
        message: "Protected Route Only For Admins",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
