var fs = require("fs");
var http = require("http");
// var url = require('url');

var server = http.createServer((req, res) => {
//	var q = url.parse(req.url, true);
//	var filename = '.' + q.pathname;
//	fs.readFile(filename, function(err, data){
	console.log('request was made: ' + req.url);
	fs.readFile('index.html', function(err, data){
		if (err) {
			res.writeHead(404, {'Content-Type' : 'text/html'});
			return res.end("404 NOT FOUND");
		}
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		return res.end();
	});

}).listen(8888, () => console.log("Server has started."));

// var employees = JSON.parse(fs.readFileSync('employees.json', 'utf8'));






/*

fs.readFile('index.html', (err, data) => {
  if (err) throw err;
  var arr = data.toString();
  arr = JSON.parse(arr);
  console.log(arr);
});
*/
