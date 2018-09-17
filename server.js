var fs = require("fs");
var http = require("http");
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let newUrl = url.parse(req.url, true);

    if (newUrl.pathname === '/getTeams') {
        let teams = JSON.parse(fs.readFileSync('teams.json', 'utf8'));
        let teamString = JSON.stringify(teams);
        res.end(teamString);
    }

    if (newUrl.pathname === '/getEmployees') {
        let employees = JSON.parse(fs.readFileSync('employees.json', 'utf8'));

        var q = newUrl.query;
        let teamId = q.teamId;
        console.log(teamId);
        let IdParam = Number(teamId);
        let employeesArray = [];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].teamId === IdParam) {
                employeesArray.push(employees[i]);
            }
        }

        console.log(employeesArray);

        let employeesString = JSON.stringify(employeesArray);

        res.end(employeesString);
    }
		
}).listen(8888, () => console.log("Server has started."));
