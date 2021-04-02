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

var lastVisit = "";
var newVisit = "";
router.get('/last.txt', function(req, res, next){
  lastVisit = newVisit;
  res.send(String(lastVisit));
  newVisit = new Date().toLocaleString();
});

var ind = 0;
var color = ["red", "yellow", "green", "blue"];
router.get('/color.html', function(req, res, next){
  if(ind >= 4) ind = 0;
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1 style="color:${color[ind]}">${color[ind++]}</h1>
      <script src="./javascripts/color.js"></script>
  </body>
  </html>`);
});

var ind2 = 0;
router.get('/color.txt', function(req, res, next){
  if(ind2 >= 4) ind2 = 0;
  res.send(color[ind2++]);
});


var timeList = [];
router.get('/log.html', function(req, res, next){
  timeList.push(String(Date()));
  let t = "";
  for(let i = 0; i < timeList.length; i++){
    t += "<li>" + timeList[i] + "</li>";
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

router.get('/log.json', function(req, res, next){
  timeList.push(String(Date()));
  res.send(timeList);
});

router.get('/log-ro.json', function(req, res, next){
  res.send(timeList);
});


module.exports = router;
