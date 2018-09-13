var fs = require("fs");
var http = require("http");
var url = require('url');


http.createServer(function (req, res) {
	 res.writeHead(200, {'Content-Type': 'text/html'});
	 var q = url.parse(req.url, true).query;
	  var txt = q.team + " " + q.employee;

	  res.end(txt);
}).listen(8888, () => console.log("Server has started."));





var teams = JSON.parse(fs.readFileSync('teams.json', 'utf8'));
var employees = JSON.parse(fs.readFileSync('employees.json', 'utf8'));
console.log(teams);
console.log(employees);
