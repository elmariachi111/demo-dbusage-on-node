var sqlite3 = require("sqlite3");
var db = new sqlite3.Database(":memory:");

//setTimeout( function() {
//    console.log("set up");
    db.run("CREATE TABLE testing " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "info TEXT)");
//},30000);


module.exports = db;