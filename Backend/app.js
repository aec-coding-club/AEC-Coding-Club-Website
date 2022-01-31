const express = require("express");
const auth = require("./routes/auth");
const app = express();
require("dotenv").config();
const connect = require("./config/database").connect();  //! DATABASE CONNECTION

const PORT = process.env.PORT;

// ! MIDDLEWARES
app.use(express.json());

// ! AUTHENTICATION ROUTE
app.use("/api/v1", auth);

module.exports = app;
