var fs = require("fs");
function mergeValues(values, content) {
	//cycle over the keys, replacing each up to 2x
		for(var key in values) {
			//Replace all {{key}} with the values from the values object
			content = content.replace("{{" + key + "}}", values[key]).replace("{{" + key + "}}", values[key])
		}
	//return merged content
	return content;
}
function view (templateName, values, response) {
	//read from the template file
	var fileContents = fs.readFileSync('./views/'+templateName+'.html', {encoding: "utf8"})
	//insert values into content
	fileContents = mergeValues(values, fileContents);
	//write out the contents to the response
	response.write(fileContents);
};
function loop (templateName, array, response) {
	//loop over array
	for(var i=0;i<array.length;i++) {
		var object = {}
		object.name = array[i]
		view(templateName, object, response);
	}
}

module.exports.view = view;
module.exports.loop = loop;