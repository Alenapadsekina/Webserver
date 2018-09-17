let fs = require("fs");
let http = require("http");
let url = require('url');

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

        let q = newUrl.query;
        let teamId = q.teamId;
        console.log(teamId);
        let idParam = Number(teamId);
        let employeesArray = [];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].teamId === idParam) {
                employeesArray.push(employees[i]);
            }
        }

        console.log(employeesArray);

        let employeesString = JSON.stringify(employeesArray);

        res.end(employeesString);
    }

}).listen(8888, () => console.log("Server has started."));
