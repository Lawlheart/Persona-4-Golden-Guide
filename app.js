var router = require("./router.js")


//Create a web server
var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
	router.date(request, response);
}).listen(1337);
console.log('Server running on localhost:1337');

