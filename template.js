var fs = require("fs"), _ = require('underscore');

var templates = {}

function load (name) {
	fs.readFile("./templates/" + name + ".html.erb", "utf8", function(error, file) {
    if(error) {
      console.log(error + "\n");
    } else {
			templates[name] = _.template(file);
    }
	});
}

function get (name) {
	return templates[name];
}

exports.load = load;
exports.get = get;