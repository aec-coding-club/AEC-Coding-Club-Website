const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const { SECRET } = process.env;
const User = require("../models/User");
// const db = require('./dataBase');
const app = express();
app.use(cookieParser());




// Verify Token
function verifyToken(req, res, next) {
    // // Get auth header value
    // const bearerHeader = req.headers['authorization'];


    const { cookies } = req;
    const bearerHeader = cookies.token;


    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {

        req.token = bearerHeader;
        // // Next middleware
        // next();
        jwt.verify(req.token, SECRET, async (err, authData) => {
            if (err) {
                console.log(err);
                res.status(403).send("not authorized!1");
            } else {

                email = authData.email
                user_id = authData.user_id

                const userData = await User.findOne({ email: email }, 'email uid');
                if (userData.uid == user_id) {
                    req.authData = authData;
                    console.log("authorized!");
                    return next()
                } else {
                    res.status(403).send("not authorized!2");
                }
            }
        });

    } else {
        // Forbidden
        res.status(403).send("not authorized!3");
    }
}


module.exports = { verifyToken };