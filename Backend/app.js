const express = require("express");
const auth = require("./routes/auth");
const app = express();
const cookieParser = require("cookie-parser")
require("dotenv").config();
const connect = require("./config/database").connect();  //! DATABASE CONNECTION

const PORT = process.env.PORT;

// ! MIDDLEWARES
app.use(express.json());

// ! cookiiiiiiiessssss
app.use(cookieParser())

// ! AUTHENTICATION ROUTE
app.use("/api/v1", auth);

module.exports = app;
