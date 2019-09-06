const crypto = require('crypto');
var express = require('express');
var router = express.Router();
const sleep = require('sleep');
const { meter } = require('../app');

var a = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  a.push(new Date());
  meter.mark();
  var randSleep = Math.round(10000 + Math.random() * 10000);
  sleep.usleep(randSleep);

  var numChars = Math.round(5000 + Math.random() * 5000);
  var randChars = crypto.randomBytes(numChars).toString('hex');

  res.render('index', { title: `${a[a.length-1].getTime()}: ${randChars}` });
});

module.exports = router;
