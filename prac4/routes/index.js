const { json } = require('express');
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

var ind = 0;
var color = ["red", "yellow", "green", "blue"];
router.get('/color', function(req, res, next){
  if(ind >= 4) ind = 0;
  console.log(color[ind]);
  res.send(color[ind++]);
});

var timeList = [];
router.get('/log.html', function(req, res, next){
  timeList.push(Date());
  let t = "";
  for(let i = 0; i < timeList.length; i++){
    t += "<li>" + String(timeList[i]) + "</li>";
  }
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <ul>${t}</ul>
  </body>
  </html>
  `);
});

module.exports = router;
