// const { Router } = require("express");
var express = require("express");
var router = express.Router();
const { isAuthenticated, isActivated } = require("../middlewares/verify");

const {
  getAll,
  get,
  add,
  update,
  deletevent,
  registerevent,
} = require("../controllers/events");

// const router = Router();

// Get All Events
router.get("/events", getAll);

// Get Specifit Event
router.get("/:id", isAuthenticated, isActivated, get);

// Create New Event
router.post("/add", isAuthenticated, isActivated, add);

// Update Specific Event Based On It's ID
router.put("/update/:id", isAuthenticated, isActivated, update);

// Dete Specifit Event Based On It's ID
router.delete("/delete/:id", isAuthenticated, isActivated, deletevent);

router.post("/registerevent/:id", isAuthenticated, isActivated, registerevent);

module.exports = router;
