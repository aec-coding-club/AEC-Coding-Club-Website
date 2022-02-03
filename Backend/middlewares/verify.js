const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticated = (req, res, next) => {
    try {
        const token =
            req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        if (!token || token == undefined) {
            return res.status(403).json({
                success: "false",
                message: "Token is Missing Please Sign In to Continue",
            });
        }
        try {
            const info = jwt.verify(token, process.env.SECRET);
            // console.log(info);
            req.user = info;
        } catch (error) {
            return res.status(401).json({
                success: "false",
                message: "Invalid Token",
            });
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            message: "Token is Missing Please Sign In to Continue",
        });
    }
};

exports.isActivated = (req, res, next) => {
    try {
        let user = User.findOne(req.user.uid);
        if (user.status == false) {
            return res
                .status(401)
                .json({ success: "false", message: "E-Mail is Not Verified" });
        } else {
            next();
        }
    } catch (error) { console.log(error); }
};