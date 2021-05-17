var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function(req, res) {
  let text = req.query.drink;
  if(text == "tea"){
    res.send("A delicious cup of tea!");
  }else if(text == "coffee"){
    res.status(418).end();
  }else{
    res.status(400).end();
  }
});

var prev = "first";
router.post('/pass-it-on', function(req, res) {
  let text = req.body.message;
  console.log(text);
  if(text == null || text == ""){
    res.status(400).end();
  }else{  
    res.send(prev);
    prev = text;
  }
});

router.post('/combine', function(req, res) {
  let suf = req.body.suffix;
  let lines = req.body.lines;
  let fin = "";
  
  for(let i = 0; i < lines.length; i++){
    fin+=lines[i]+suf+'\n';
  }
  res.send(fin);
});

var express = require('express');
var app = express();
app.use(express.json());

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
