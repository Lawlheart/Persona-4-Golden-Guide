var express = require('express');
var router = express.Router();
var calendar = require('../public/js/calendar.json');
var dates = require('../public/js/dates.js')

/* GET home page. */
router.get('/*', function(req, res, next) {
  var search = req.url.replace("/", "");
  console.log(calendar[search])
  if(calendar[search] !== undefined ){
  	var day = calendar[search]
  	//create navigation arrows
  	var currentIndex = dates.indexOf(search)
		var prev = dates[currentIndex-1] === undefined ? dates[currentIndex]: dates[currentIndex-1];
		var next = dates[currentIndex+1] === undefined ? dates[currentIndex]: dates[currentIndex+1]
		day.prevDay = prev;
		day.nextDay = next;
  	res.render('days', day);
  } else {
  	res.render('calendar', {})
  }
});

module.exports = router;
