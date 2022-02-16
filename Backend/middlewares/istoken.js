const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.istokenpresent = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (token === undefined) {
      return res.json({
        success: false,
        message: 'Token is Missing Please Sign In to Continue',
      });
    }
    try {
      const info = jwt.verify(token, process.env.SECRET);
      console.log(info);
      req.user_info = info;
    } catch (error) {
      return res.json({
        success: false,
        message: 'Invalid Token',
      });
    }
    next();
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      message: "Somehing Went Wrong Cookies Can't be Accessed",
    });
  }
};
