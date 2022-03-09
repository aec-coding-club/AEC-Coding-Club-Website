var express = require("express");
var router = express.Router();
const { getlogs, branchdata,yeardata } = require("../controllers/alllogs");
const {
  isAuthenticated,
  isActivated,
  isAdmin,
} = require("../middlewares/verify");

router.get("/logger", isAuthenticated, isActivated, isAdmin, getlogs);
router.get("/branchdata", isAuthenticated, isActivated, isAdmin, branchdata);
router.get("/yeardata", isAuthenticated, isActivated, isAdmin, yeardata);

module.exports = router;
