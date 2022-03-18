// const { Router } = require("express");
var express = require("express");
var router = express.Router();
const getlogs = require("../controllers/alllogs");
const {
  isAuthenticated,
  isActivated,
  isAdmin,
} = require("../middlewares/verify");

const {
  getAll,
  getevent,
  add,
  update,
  deletevent,
  registerevent,
  announceall,
} = require("../controllers/events");

// const router = Router();

// Get All Events
router.get("/events", getAll);

// Get Specifit Event
router.get("/:id", isAuthenticated, isActivated, getevent);

// Create New Event
router.post("/add", isAuthenticated, isActivated, isAdmin, add);

// Update Specific Event Based On It's ID
router.put("/update/:id", isAuthenticated, isActivated, isAdmin, update);

// Dete Specifit Event Based On It's ID
router.delete("/delete/:id", isAuthenticated, isActivated, isAdmin, deletevent);

router.post("/registerevent/:id", isAuthenticated, isActivated, registerevent);
router.post("/announceall", isAuthenticated, isActivated, isAdmin, announceall);

module.exports = router;
