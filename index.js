var http = require('http');

http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'Text-Plain'});
	res.end("Hello World!")
}).listen(8080);

console.log('Server started on localhost:8080, press Ctrl+C to terminate....');