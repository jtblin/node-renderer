var http = require("http");

function start(route, handle) {
  function onRequest(request, response) {
		console.log("Request for " + request.url + " received.");
		var postData = '';
		
		request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      // console.log("Received POST data chunk '"+
      // postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, request, response, postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;