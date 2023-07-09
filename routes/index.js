var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express Skills Home Page" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About the Express Skills App" });
});

module.exports = router;
