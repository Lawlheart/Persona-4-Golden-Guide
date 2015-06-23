var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");

/**
 * An EventEmitter.
 * @param username
 * @constructor
 */
function SLinks(rawdate) {
    console.log(rawdate);
    var date = new Date(rawdate)
    console.log(date)
    if(date.getDay() === 6) {
        console.log("saturday")
    }

}

util.inherits( SLinks, EventEmitter );

module.exports.SLinks = SLinks;