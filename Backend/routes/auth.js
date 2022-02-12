var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { register, login, verifyOTP } = require("../controllers/auth");
const { isAuthenticated, isActivated } = require("../middlewares/verify");
const { dashboard } = require("../controllers/user");

router.post(
  "/register",
  [
    check("email", "E-Mail is Required").isEmail(),
    check("contact_no", "Contact Number is Invalid").isLength({
      min: 10,
      max: 10,
    }),
    check("password", "Password should be atleat 3 character").isLength({
      min: 5,
    }),
  ],
  register
);
router.post("/login", [check("email", "E-Mail is Required").isEmail()], login);

router.post("/verify", isAuthenticated, verifyOTP);
router.post("/dummy", isAuthenticated, (req, res) => {
  token = req.cookies.token;
  return res.json({ token: token });
});

router.get("/dummy", function (req, res) {
  res.status(200).json({ message: "Hello world!" });
});

router.get("/dashboard", isAuthenticated, isActivated, dashboard);
router.get("/dashboardtry", isAuthenticated, (req, res) => {
  return res.json({ message: "Welcome To proected Route", user: req.user });
});

module.exports = router;
