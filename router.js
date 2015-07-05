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
		
		//render the title bar
		var Arcana = arcana[search];
		renderer.view('arcana', Arcana, response);

		//render the notes
		response.write('<div class="notes">'+ (Arcana.notes === undefined? "":Arcana.notes) +'</div>')

		//render the social link ranks
		if(Arcana.rank !== undefined) {
			response.write('<h3 class="rank-title">Rank 1</h3>');
			response.write('<div class="dialog"><h4>' + Arcana.rank[0] + '</h4></div>')
		
			for(var i=1;i<Arcana.rank.length;i++) {
				var rank = Arcana.rank[i]
				response.write('<h3 class="rank-title">'+rank.rank+'</h3>')

				//render the dialog options
				response.write("<div class='dialog'>")
				//render the notes
				if(rank.notes !== "") {
					response.write('<h4>'+rank.notes+'</h4>')
				}
				for(var j=0;j<rank.dialog.length;j++) {
					var dialog = rank.dialog[j];
					response.write('<h4>'+dialog.question+'</h4>')
					//render the answers
					var answers = dialog.answers;
					response.write("<ul class='answers'>")
					for(var k=0;k<answers.length;k++) {
						response.write("<li>"+ answers[k][0]+"<span class='with'>"+answers[k][2]+"</span><span class='without'>"+answers[k][1]+"</span></li>")
					}
					response.write("</ul>")
				}
				response.write("</div>")
			}
		}
		//render the days available
		if(persona.arcanaDays(search).length>0) {
			response.write("<h3 class='dates-title'>Days Available</h3><ul class='dates'>");
			renderer.loop('arcanadays', persona.arcanaDays(search), response);
			response.write("</ul>");
		}

		//render the bike days
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
