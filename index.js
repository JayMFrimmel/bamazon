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
		choices: ["By item number", "By product name", "By department name"]
	}).then(function(answer) {
		switch(answer.action) {
			case 'By item number':
				itemSearch();
			break;

			case 'By product name':
				productSearch();
			break;

			case 'By department name':
				deptName();
			break;
		}
	})
}

var itemSearch = function() {
	inquirer.prompt({
		name: "Item Number",
		type: "input",
		message: "Please enter the item number here."
	}).then(function(answer) {
		var query = 'SELECT product, department, price FROM products WHERE ?'
		connection.query(query, )
	})
}