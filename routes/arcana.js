var express = require('express');
var router = express.Router();
var persona = require('../public/js/persona.js');
var arcana = require('../public/js/arcana.js');

/* GET users listing. */
router.get('/*', function(req, res, next) {
  var search = req.url.replace("/", "");
  var Arcana = arcana[search];
  var tripdays = persona.bikeRides(search);
  Arcana.tripdays = tripdays;
  var freedays = persona.arcanaDays(search);
  Arcana.freedays = freedays;
  if (arcana.list.indexOf(search)>=0) {
  	res.render('arcana', Arcana );
  } else {
		res.render('slinks', {slinks: arcana});
  }
});

module.exports = router;
