var sqlite3 = require("sqlite3");


var Container = module.exports = function() {
    var db = null;
}

Container.prototype = {

    initializeDb: function(db) {
        db.run("CREATE TABLE testing " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
             "info TEXT)", function(err) {
            console.dir(err);
        });
    },
    getDb: function() {
        if (null == this.db) {
            this.db = new sqlite3.Database(":memory:");
            this.initializeDb(this.db);
        }
        return this.db;
    }
}






