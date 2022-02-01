var express = require("express");
var router = express.Router();
const { register } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

router.post(
    "/register",
    [
        check("email", "E-Mail is Required").isEmail(),
        check("contact_no", "Contact Number is Invalid").isLength({ min: 10, max: 10 }),
        check("password", "Password should be atleat 3 character").isLength({
            min: 5,
        }),
    ],
    register
);
router.get("/dummy", function (req, res) {
    res.status(200).json({message : "Hi Abir How Are You"});
});

module.exports = router;
