var express = require("express");
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require("../controllers/skills");

// GET /skills
router.get("/", skillsCtrl.index);
router.get("/:id", skillsCtrl.show);

module.exports = router;
