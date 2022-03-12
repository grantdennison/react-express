var express = require("express");
const cors = require("cors");
var router = express.Router();
var users = require("./users.js").users;

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
router.use(cors(corsOptions));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", users: users });
});

module.exports = router;
