var Events = require("./events.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type': 'text/html'};
var calendar = require('./calendar.json');
//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
	//if url == "/" && GET
  if (request.url === "/") {
		if(request.method.toLowerCase() === "get") {
			//show search
			response.writeHead(200, commonHeaders);
			renderer.view('header', {}, response);
			renderer.view('search', {}, response);
			renderer.view('footer', {}, response);
			//response.end();
		} else {
			//if url == "/" && POST
			//get the post data from body
			request.on("data", function(postBody) {
				//extract the date
				var query = querystring.parse(postBody.toString());
				//redirect to /:date
				response.writeHead(303, {"Location":"/"+query.date});
				response.end();
			});
		}
	}
}
//Handle HTTP route GET /:date
function date(request, response) {
	//disables favicon search that causes double console.log-ing
	if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    return;
  }
	//if url== "/...."
	//get the date to display from the url
	var searchDate = request.url.replace("/", "");
	if(searchDate.length>0) {
		//start writing html for page
		response.writeHead(200, commonHeaders);
		renderer.view('header', {}, response);
		//get the current day from the calendar Object
		var currentDay = calendar[searchDate];
		renderer.view('datecard', currentDay, response);
		//loop through available social links and add the icons to the page
		for(var i=0;i<currentDay.socialLinks.length;i++) {
			var link = {};
			link.name = currentDay.socialLinks[i];
			renderer.view('slink', link, response);
		}
		renderer.view('datecard-end', {}, response);
		renderer.view('footer', {}, response);
		response.end();
	}
}
//export the home and date functions for app.js
module.exports.home = home;
module.exports.date = date;