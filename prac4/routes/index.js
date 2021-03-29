var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var counter = 0;
router.get('/count', function(req, res, next){
  counter++;
  res.send(String(counter));
});

var lastVisit = 0;
router.get('/last.txt', function(req, res, next){
  res.send(String(lastVisit));
  lastVisit = Date.now();
});

module.exports = router;
