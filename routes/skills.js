var express = require("express");
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new); // must come before "/:id"
router.get("/:id", skillsCtrl.show);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
