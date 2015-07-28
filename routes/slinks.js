var express = require('express');
var router = express.Router();
var arcana = require('../public/js/arcana.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('slinks', {slinks: arcana});
});

module.exports = router;
