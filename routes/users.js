var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yokai321',
  database: 'sakila'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getTable', function(req, res, next) {
  pool.getConnection(function(err, connection){
    if (err){
      throw err;
    }
    let cmd = "SELECT first_name, last_name FROM actor;";
    pool.query(cmd, function(err, data, fields) {
      if (err){
        res.sendStatus(500);
        return;
      }
      res.json({
        status: 200,
        data
      })
    });  
  });
});

router.post('/addActor', function(req, res, next) {
  pool.getConnection(function(err, connection){
    if (err){
      throw err;
    }
    let today = new Date();
    let day = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    // let cmd = "INSERT INTO actor (first_name, last_name, last_update) VALUES (?);";
    let cmd = "INSERT INTO actor (first_name, last_name, last_update) VALUES (" +"'"+req.body.first+"',"+"'"+req.body.last+"',"+"'"+day+"'"+");";
    // let val = [req.body.first, req.body.last, day];
    connection.query(cmd, function(err, data, fields) {
      // connection.release();
      if (err){
        res.sendStatus(500);
        return;
      }
      res.end();
    });
  });
});

// router.post('/addActor', function(req, res, next) {
//   pool.getConnection(function(err, connection){
//     let cmd = `INSERT INTO actor(first_name, last_name, last_update) VALUES (?);`;
//     let today = new Date();
//     let day = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
//     let values = [req.body.first, req.body.last, day];

//     connection.query(cmd, [values], function(err, data, fields) {
//       if (err) throw err;
//       res.json({
//         status: 200
//       })
//     });
//   });
// });

module.exports = router;