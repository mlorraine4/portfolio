var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/projects/garden-of-pages", function (req, res, next) {
  res.render("gardenofpages-detail");
});

router.get("/projects/fumblr", function (req, res, next) {
  res.render("fumblr-detail");
});

router.get("/projects/glass-gardens", function (req, res, next) {
  res.render("glassgardens-detail");
});

router.get("/projects/battleship", function (req, res, next) {
  res.render("battleship-detail");
});

module.exports = router;
