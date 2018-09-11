var employees = [
    {
        name: "Alena Padsekina",
        team: "HTML5/IFE"
    },
    {
        name: "Sergey Bondar",
        team: "Main releases"
    },
    {
        name: "Maxim Marasanau",
        team: "CBC"
    },
    {
        name: "Volha Lenkevich",
        team: "Main releases"
    },
    {
        name: "Dmitry Minin",
        team: "CBC"
    },
    {
        name: "Dmitry Bashlak",
        team: "HTML5/IFE"
    },
    {
        name: "Denis Podgorny",
        team: "Main releases"
    }
];

function defineTeamMembers() {     
	var team = document.getElementById("teams").value;
    var group = []; // create an array containing team members
	for (var i = 0; i < employees.length; i++) {
        if (employees[i].team === team) {
            group.push(employees[i]);
        }
    }
	
	return group;
}



function populateTeamMembers() { //populate team members
	var group = defineTeamMembers();
    var teamMembersDropdown = document.getElementById("teamMembers"); // clear previously filled 'Members' dropdown
    while (teamMembersDropdown.firstChild) {
        teamMembersDropdown.removeChild(teamMembersDropdown.firstChild);
    }
    
    for (var i = 0; i < group.length; i++) { // create lines in 'Members' dropdown and populate them with group members
        var option = document.createElement("option");
        option.text = group[i].name;
        option.value = group[i].name;
        teamMembersDropdown.appendChild(option);
    }


    //return group;
}

function oneEmployeeAvailibility() {
    console.log("test passed");
    var group = defineTeamMembers();
    var table = document.getElementById("reportTable");
    var row = table.insertRow(0);
    var nameCell = row.insertCell(0);
    var statusCell = row.insertCell(1);
    nameCell.innerHTML = group.name;
    var person = group.name.split(" ");
        if (person[1].length % 2 == 0) {
            statusCell.innerHTML = "Available";
            statusCell.classList.add("available");
        } else {
            statusCell.innerHTML = "Not available";
            statusCell.classList.add("notAvailable");
        }
    
    var headerRow = table.insertRow(0);
    headerRow.innerHTML = "Employee's availability";
    headerRow.classList.add("headerRow");
}


function createTable() { // create a table corresponding to the selected team
    console.log("inside create table");
    var group = defineTeamMembers();
    var table = document.getElementById("reportTable");
    for (var i = 0; i < group.length; i++) {
        var row = table.insertRow(i);
        var nameCell = row.insertCell(0);
        var statusCell = row.insertCell(1);
        nameCell.innerHTML = group[i].name;
        var person = group[i].name.split(" ");
        if (person[1].length % 2 == 0) {
            statusCell.innerHTML = "Available";
            statusCell.classList.add("available");
        } else {
            statusCell.innerHTML = "Not available";
            statusCell.classList.add("notAvailable");
        }
    }
    var headerRow = table.insertRow(0);
    headerRow.innerHTML = "Employees availability";
    headerRow.classList.add("headerRow");
}




var errorMessage;

function showError(errorMessage) { // create error message
    var error = document.createTextNode(errorMessage);
    var div = document.getElementById("errorMessage");
    div.appendChild(error);
    div.classList.add("errorMessage");
    console.log("error OK");
}




function generateReport() { // show report: a table or error message
	var oldTable = document.getElementById("reportTable"); // erase the previously created table or error message
    while (oldTable.firstChild) {
        oldTable.removeChild(oldTable.firstChild);
    }
    var oldError = document.getElementById("errorMessage");
    while (oldError.firstChild) {
        oldError.removeChild(oldError.firstChild);
    }
   
    console.log("clean old result OK");
   
    switch (document.getElementById("teams").value) {
        case "":
            showError("Please define a team");
            break;
        case "HTML5/IFE":
        case "Main releases":
        case "CBC":
            createTable();
            console.log("create table OK");
            break;
        default:
            showError("No data found");
            break;
    }
}
