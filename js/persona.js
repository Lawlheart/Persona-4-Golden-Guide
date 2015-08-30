var calendar = require('./calendar.json');
var dates = require('./dates.js');
var arcanas = require('./arcana.js');
var names = {
	fool:"Investigation Group",
	magician:"Yosuke",
	priestess:"Yukiko",
	empress:"Margaret",
	emperor:"Kanji",
	hierophant:"Dojima",
	lovers:"Rise",
	chariot:"Chie",
	justice:"Nanako",
	hermit:"Fox",
	fortune:"Naoto",
	strength:"Sports Club",
	hangedman:"Naoki",
	death:"Hisano",
	temperance:"Eri",
	devil:"Sayoko",
	tower:"Shu",
	star:"Teddie",
	moon:"Ai",
	sun:"Drama Club",
	judgement:"Seekers of Truth",
	aeon:"Marie",
	jester:"Adachi"
}
var persona = {
	searchNotes:function(search){
		var count = 0
		for(var i=0;i<dates.length;i++) {
			var day = calendar[dates[i]];
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
	},
	arcanaDays:function(arcana) {
		var days = [];
		for(var i=0;i<dates.length;i++) {
			var day = calendar[dates[i]];
			if(day.socialLinks.indexOf(arcana)>=0) {
				days.push(day.date);
			}
			if(day.nightLinks.indexOf(arcana)>=0) {
				days.push(day.date + " (night)");
			}
		}
		return days
	},
	bikeRides:function(arcana) {
		var days = [];
		for(var i=0;i<dates.length;i++) {
			var day = calendar[dates[i]];
			if(day.dayNotes.indexOf(names[arcana] + " is available for a scooter ride today")>=0) {
				days.push(day.date);
			}
		}
		return days;
	}
}
module.exports = persona;