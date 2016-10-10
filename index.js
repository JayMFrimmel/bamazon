//create first variables
var mysql = require('mysql'); 

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root", //User Name
	password: "", //password
	database: "BamazonDB"
})

connection.connect(function(err) {
	if (err) throw err;
	runSearch();
})

var runSearch = function() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "How would you like to choose your items:",
		choices: ["By item number", "by item name", "by department name"]
	}).then(function(answer) {
		switch(answer.action {
			case 'By item number':
				

		})
	})
}