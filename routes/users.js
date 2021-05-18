var express = require('express');
var router = express.Router();

// router.post("/", function (req, res, next) {
//   console.log("POST from a user");
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var blog = [];
router.post('/addpost', function(req, res) {
  blog.push(req.body);
  res.status(200).end();
});

router.get('/getposts', function(req, res) {
  let temp = blog;
  temp.reverse();
  res.send(temp);
});

module.exports = router;
