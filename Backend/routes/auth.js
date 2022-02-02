var express = require("express");
var router = express.Router();
const { register } = require("../controllers/auth");
const { login } = require("../controllers/auth");
const { dashboard } = require("../controllers/user");
const { check, validationResult } = require("express-validator");
const { isAuthenticated } = require("../middlewares/auth");

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

router.get("/dummy", function (req, res) {
    res.status(200).json({ message: "Hi Abir How Are You" });
});
router.get("/dashboard", isAuthenticated, dashboard);

module.exports = router;
