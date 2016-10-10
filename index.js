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
				deptSearch();
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
		connection.query(query, {item: answer.itemID}, function(err, res) {
				for (var i = 0; i < res.length; i++) {
					console.log("Product name: " + res[i].product + " || Department" + res[i].department + "$ " + res[i].price);
					}
				runSearch();
		})
	})
};

var productSearch = function() {
	inquirer.prompt({
		name: "Product Name",
		type: "input",
		message: "Please enter the product name here"	
	}).then(function(answer) {
		console.log(answer.product)
		connection.query('SELECT * FROM products WHERE ?', {products: answer.product},
		function(err, res) {
			console.log("Item Number: " + res[0].itemID + " || Department" res[0}.deptNAME + "$ " + res[0].price);
		runSearch();
		})
	})
};

var deptSearch = function() {
	inquirer.prompt({
		name: "Department Name",
		type: "input",
		message: "Please enter the department name here"
	}).then(function(answer) {
		console.log(answer.department)
		connection.query('SELECT * FROM products WHERE ?', {product: answer.department},
		function(err, res) {
			console.log
		})("Item Number: " + res[0].itemID + " || Department" + "$ " + res[0].price);
		runSearch();
		})
	}
};
