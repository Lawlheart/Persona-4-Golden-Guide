var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
var jsString = ""
var firstRank = true;
var n = 1;
var aeon = require("./aeon.txt")
aeon = aeon.split("\n");
for(var i=0;i<aeon.length;i++) {
	aeon[i] = aeon[i].replace("\r", "")
	aeon[i] = aeon[i].replace("\n", "")
	aeon[i] = aeon[i].replace("\t", "")
	if(aeon[i].search("=====") !== -1) {
		var rank = aeon[i-1]
		if(firstRank === false) {
			jsString +='\n]}'
		}
		firstRank = false
		jsString += ("\naeon.rank["+n+"] = {" )
		n ++
		jsString += ("\n  rank:\"" + rank.slice(0,4) + rank.slice(18) +"\",")
		jsString += ("\n  points: 0,")
			if(aeon[i+1].indexOf("All Choices have the same effect.") !== -1) {
				jsString += ("\n  notes:\"All Choices have the same effect.\",")
			} else {
				jsString += ("\n  notes:\"\",")
			}
			jsString += ("\n  dialog:[")
	}
	if(aeon[i].search("----") !== -1 || aeon[i].search("====") !== -1 && aeon[i+1].indexOf("All Choices have the same effect.") === -1) {
		jsString += ("\n	  new Dialog(\"" + aeon[i+1].slice(0,aeon[i+1].length-1) + "\", ")
		for(var j=0;j<5;j++) {
			if(aeon[i+j+1].slice(0,2) === "1.") {
				var answer = aeon[i+j+1].replace(/"/g,"'")
				var end = answer.indexOf("   ")
				var p1 = answer.indexOf("+")
				var np = answer.slice(p1+1, p1+2)
				var wp = answer.slice(p1+8, p1+9)
				jsString += "[[\"" + answer.slice(2, end) + "\"," + np + "," + wp + "]"
			} else if(aeon[i+j+1].slice(0,2) === "2.") {
				var answer = aeon[i+j+1]
				var end = answer.indexOf("   ")
				var p1 = answer.indexOf("+")
				var np = answer.slice(p1+1, p1+2)
				var wp = answer.slice(p1+8, p1+9)
				jsString += ",[\"" + answer.slice(2, end) + "\"," + np + "," + wp + "]"
			} else if(aeon[i+j+1].slice(0,2) === "3.") {
				var answer = aeon[i+j+1]
				var end = answer.indexOf("   ")
				var p1 = answer.indexOf("+")
				var np = answer.slice(p1+1, p1+2)
				var wp = answer.slice(p1+8, p1+9)
				jsString += ",[\"" + answer.slice(2, end) + "\"," + np + "," + wp + "]"
			} else if(aeon[i+j+1].slice(0,2) === "4.") {
				var answer = aeon[i+j+1]
				var end = answer.indexOf("   ")
				var p1 = answer.indexOf("+")
				var np = answer.slice(p1+1, p1+2)
				var wp = answer.slice(p1+8, p1+9)
				jsString += ",[\"" + answer.slice(2, end) + "\"," + np + "," + wp + "]"
			} else if(aeon[i+j+1].slice(0,2) === "5.") {
				var answer = aeon[i+j+1]
				var end = answer.indexOf("   ")
				var p1 = answer.indexOf("+")
				var np = answer.slice(p1+1, p1+2)
				var wp = answer.slice(p1+8, p1+9)
				jsString += ",[\"" + answer.slice(2, end) + "\"," + np + "," + wp + "]"
			} else if(aeon[i+j+1].slice(0,2) === "6.") {
				var answer = aeon[i+j+1]
				var end = answer.indexOf("   ")
				var p1 = answer.indexOf("+")
				var np = answer.slice(p1+1, p1+2)
				var wp = answer.slice(p1+8, p1+9)
				jsString += ",[\"" + answer.slice(2, end) + "\"," + np + "," + wp + "]"
			}
		}	
		jsString +=']),'
	}
}
jsString +='\n]}'
console.log(jsString)