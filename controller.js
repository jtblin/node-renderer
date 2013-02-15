var tpl = require("./template"), _ = require('underscore');

tpl.load('index');
tpl.load('user');

function user(request, response, query) {
	console.log("Request handler 'user' was called.");
	var user_tpl = tpl.get('user');
	var json = {
			'name': query['name'],
			'status': query['status']
	}
	render(response, user_tpl, json);

}

// {'name': 'John Doe', 'status': 'Active'}

function index(request, response, query) {
	console.log("Request handler 'index' was called.");
	var index_tpl = tpl.get('index');
	var json = JSON.parse(query['d']);
	render(response, user_tpl, json);

}

function render(response, tpl, json) {
	// console.log(json);
	var body = tpl({data: json}, {variable: 'data'});
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

exports.index = index;
exports.user = user;