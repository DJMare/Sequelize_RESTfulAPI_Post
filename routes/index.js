var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');
// Require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add post route for actors
router.post('/actors', function (req, res, next) {
  models.actor.create(req.body)
    .then(newActor => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(newActor));
    })
    .catch(err => {
      res.status(400);
      res.send(err.message);
    });
});


module.exports = router;
