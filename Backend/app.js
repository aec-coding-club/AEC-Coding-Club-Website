const express = require("express");
const auth = require("./routes/auth");
const events = require("./routes/events");
const alllogs = require("./routes/alllogs");
const app = express();
const cookieparser = require("cookie-parser");
require("dotenv").config();
var cors = require("cors");
const connect = require("./config/database").connect(); //! DATABASE CONNECTION

const PORT = process.env.PORT;

// ! MIDDLEWARES
app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://aeccc.targettechnology.in"],
    credentials: true,
  })
);

// ! AUTHENTICATION ROUTE
app.get("/", (req, res) => {
  res.send(
    '<br><br><h1 style="text-align: center;"><img src="https://i.ibb.co/3fd4H5Y/image.png" alt="Bhai Kya Kar Raha Hai Tu?" border="0"></h1> '
  );
});
app.use("/api/v1", alllogs);
app.use("/api/v1", auth);
app.use("/api/v1", events);
app.use("/*", (req, res) => {
  res.status(404).send(`<br><br><h1 style="text-align: center;">404 || content not found</h1>`);
});
module.exports = app;
