var express = require("express");
var router = express.Router();
var users = require("./users.js").users;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", users: users });
});

module.exports = router;
