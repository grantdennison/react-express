var express = require("express");
var router = express.Router();
// router.use(express.json());
var nID = 4;
var users = [
  {
    id: 1,
    username: "grant",
  },
  {
    id: 2,
    username: "sam",
  },
  {
    id: 3,
    username: "danny",
  },
];

const addUser = function (user) {
  user = user.username.toLowerCase();
  console.log(user);
  if (user === "" || users.some((urs) => urs.username === user)) {
    return false;
  } else {
    users.push({ id: nID, username: user });
    nID++;
  }
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  // And insert something like this instead:
  res.json(users);
});
router.post("/", function (req, res, next) {
  addUser(req.body);
  res.send(users);
  //If want to send text data
  // res.json("Well done");
});
// router.put("/",function(req, res, next){
//   users.push(res)
// })

module.exports.router = router;
module.exports.users = users;
