var router = require("./router.js")


//Create a web server
var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
	router.date(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

