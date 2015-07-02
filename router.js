var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type': 'text/html'};
var calendar = require('./calendar.json');
var persona = require('./persona.js');
var arcana = require('./arcana.js');
var dates = require('./dates.js');

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
	//if url == "/" && GET
  if (request.url === "/") {
		if(request.method.toLowerCase() === "get") {
			//show calendar page
			response.writeHead(200, commonHeaders);
			renderer.view('header', {}, response);
			renderer.view('calendar', {}, response);
			renderer.view('homefooter', {}, response);
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
	var search = request.url.replace("/", "");

	//disables favicon search that causes double console.log-ing
	if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    return;
  } else if(dates.indexOf(search) >= 0) {
		
		//start writing html for page
		response.writeHead(200, commonHeaders);
		
		//get the current day from the calendar Object
		var currentDay = calendar[search];
		renderer.view('header', {}, response);
		
		//create nagivation links, redirecting the earliest and latest dates in the array back to the current date
		var currentIndex = dates.indexOf(search)
		var prev = dates[currentIndex-1] === undefined ? dates[currentIndex]: dates[currentIndex-1];
		var next = dates[currentIndex+1] === undefined ? dates[currentIndex]: dates[currentIndex+1]
		var arrows = {
			"prevDay": prev,
			"nextDay": next
		}
		//add the navigation arrows
		renderer.view('arrows', arrows, response);

		//add the title and spoilers
		renderer.view('datecard', currentDay, response);
		for(var i=0;i<currentDay.spoilers.length;i++) {
      var spoiler = currentDay.spoilers[i]
      renderer.view('spoiler',spoiler,response);
      }

		//add the social link title and loop through daytime social links to add the icons to the page
		if(currentDay.socialLinks.length>0) {
			response.write("<h2 class='slinks'>Social Links Available</h2><ul class='slinks'>");
			renderer.loop('slink', currentDay.socialLinks, response);
			response.write("</ul>");
		}

		// add the nightcard.html and loop through nighttime social links to add the icons to the page
		renderer.view('nightcard', currentDay, response);
		if(currentDay.nightLinks.length>0) {
			response.write("<h2 class='slinks'>Social Links Available</h2><ul class='slinks'>");
			renderer.loop('slink', currentDay.nightLinks, response);
			response.write("</ul>");
		}
		//add the footer
		renderer.view('footer', {}, response);
		response.end();
	} else if (arcana.list.indexOf(search)>=0) {
		var search = request.url.replace("/", "");
		//write the header, including css
		response.writeHead(200, commonHeaders);
		renderer.view('header', {}, response);
		
		//generate the arcana object
		var capSearch = search[0].toUpperCase() + search.slice(1);
		var Arcana = {
			arcana:capSearch,
			name:arcana[search],
			img:search
		}
		
		renderer.view('arcana', Arcana, response);
		if(persona.arcanaDays(search).length>0) {
			response.write("<h3 class='dates-title'>Days Available</h3><ul class='dates'>");
			renderer.loop('arcanaDays', persona.arcanaDays(search), response);
			response.write("</ul>");
		}
		if(persona.bikeRides(search).length>0) {
			response.write("<h3 class='dates-title'>Bike Ride Days</h3><ul class='dates'>")
			renderer.loop('arcanadays', persona.bikeRides(search), response);
			response.write("</ul>");
		}
		renderer.view('arcanafooter',{} , response);
		response.end();
	} else if(request.url !== '/'){
		//show error page on all other urls
		response.writeHead(404, commonHeaders);
			renderer.view('header', {}, response);
			renderer.view('404', {}, response);
			renderer.view('footer', {}, response);
			response.end();
	}
}

//export the home and date functions for app.js
module.exports.home = home;
module.exports.date = date;
