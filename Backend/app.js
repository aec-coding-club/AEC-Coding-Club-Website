const express = require("express");
const auth = require("./routes/auth");
const events = require("./routes/events");
const app = express();
const cookieparser = require("cookie-parser");
require("dotenv").config();
const connect = require("./config/database").connect(); //! DATABASE CONNECTION

const PORT = process.env.PORT;

// ! MIDDLEWARES
app.use(express.json());
app.use(cookieparser());

// ! AUTHENTICATION ROUTE
app.use("/api/v1", auth);
app.use("/api/v1", events);

module.exports = app;
