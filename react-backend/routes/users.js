var express = require("express");
var router = express.Router();
var users = [
  {
    id: 1,
    username: "grant",
  },
  {
    id: 2,
    username: "Sam",
  },
  {
    id: 3,
    username: "Danny",
  },
];
/* GET users listing. */
router.get("/", function (req, res, next) {
  // And insert something like this instead:
  res.json(users);
});

// router.put("/",function(req, res, next){
//   users.push(res)
// })

module.exports.router = router;
module.exports.users = users;
