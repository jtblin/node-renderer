var url = require("url"), qs = require("querystring");

function route(handle, request, response, postData) {
	var pathname = url.parse(request.url).pathname;
  console.log("About to route a request for " + pathname);
	var query = (postData === '') ? url.parse(request.url,true).query : qs.parse(postData);
	
	if (typeof handle[pathname] === 'function') {
	    handle[pathname](request, response, query);
	  } else {
	    console.log("No request handler found for " + pathname);
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not found");
	    response.end();
	  }
}

exports.route = route;