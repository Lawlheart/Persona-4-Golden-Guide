var Events = require("./events.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type': 'text/html'};
var calendar = require('./calendar.json');

//create an array of dates for the arrow navigation
var datesArray = []
for(key in calendar) {
	datesArray.push(key)
}
//sorts the array into the correct calendar order
datesArray.sort();
var year2011 = datesArray.slice(48)
var year2012 = datesArray.slice(0,48)
datesArray = year2011.concat(year2012);

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
	//if url == "/" && GET
  if (request.url === "/") {
		if(request.method.toLowerCase() === "get") {
			//show calendar page
			response.writeHead(200, commonHeaders);
			renderer.view('header', {}, response);
			renderer.view('calendar', {}, response);
			renderer.view('footer', {}, response);
			response.end();
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
	//get the date to display from the url
	var searchDate = request.url.replace("/", "");

	//disables favicon search that causes double console.log-ing
	if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    return;
  } else if(datesArray.indexOf(searchDate) >= 0) {
		
		//start writing html for page
		response.writeHead(200, commonHeaders);
		
		//get the current day from the calendar Object
		var currentDay = calendar[searchDate];
		renderer.view('header', {}, response);
		
		//create nagivation links, redirecting the earliest and latest dates in the array back to the current date
		var currentIndex = datesArray.indexOf(searchDate)
		var prev = datesArray[currentIndex-1] === undefined ? datesArray[currentIndex]: datesArray[currentIndex-1];
		var next = datesArray[currentIndex+1] === undefined ? datesArray[currentIndex]: datesArray[currentIndex+1]
		var arrows = {
			"prevDay": prev,
			"nextDay": next
		}
		//add the navigation arrows and the header
		renderer.view('arrows', arrows, response);

		//add the daytime card and loop through daytime social links to add the icons to the page
		renderer.view('datecard', currentDay, response);
		for(var i=0;i<currentDay.socialLinks.length;i++) {
			var link = {};
			link.name = currentDay.socialLinks[i];
			renderer.view('slink', link, response);
		}

		// add the nighttime card and loop through nighttime social links to add the icons to the page
		renderer.view('nightcard', currentDay, response);
		for(var i=0;i<currentDay.nightLinks.length;i++) {
			var link = {};
			link.name = currentDay.nightLinks[i];
			renderer.view('slink', link, response);
		}
		//add the footer
		renderer.view('footer', {}, response);
		response.end();
	} else if(request.url !== '/'){
		//show error page on all other urls
		response.writeHead(200, commonHeaders);
			renderer.view('header', {}, response);
			renderer.view('404', {}, response);
			renderer.view('footer', {}, response);
			response.end();
	}
}

//export the home and date functions for app.js
module.exports.home = home;
module.exports.date = date;
