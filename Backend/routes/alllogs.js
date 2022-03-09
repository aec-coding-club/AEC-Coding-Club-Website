var express = require("express");
var router = express.Router();
const getlogs = require("../controllers/alllogs");
const {
  isAuthenticated,
  isActivated,
  isAdmin,
} = require("../middlewares/verify");

router.get("/logger", isAuthenticated, isActivated, isAdmin, getlogs);

module.exports = router;