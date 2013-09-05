
var connection = require("../db.js");

/*
 * GET home page.
 */

exports.index = function(req, res){
	
	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
		if (err) 
			throw err;
		
		//console.log('The solution is: ', rows[0].solution);
		res.render('index', { title: 'Express', solution:rows[0] });
		
	});
};

