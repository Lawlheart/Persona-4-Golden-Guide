var calendar = require('./calendar.json');
var persona = {
	searchNotes:function(search){
		var count = 0
		for(prop in calendar) {
			var day = calendar[prop]
			if(day.dayNotes.indexOf(search)>=0) {
				console.log(day.weekDay + ", " + day.date);
				console.log(day.dayNotes);
				console.log("----------------------");
				count++
			} else if (day.nightNotes.indexOf(search)>=0) {
				console.log(day.weekDay + ", " + day.date);
				console.log(day.nightNotes);
				console.log("----------------------");
				count++
			}
		}
		console.log(count + " Results")
	}
}

persona.searchNotes("Sofue")
