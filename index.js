var server = require("./server"), router = require("./router");

var controller = require("./controller");

var handle = {}
handle["/index"] = controller.index;
handle["/user"] = controller.user;

server.start(router.route, handle);