var sqlite3 = require("sqlite3");
var Q = require("q");

var Container = module.exports = function() {
    var db = null;
}

Container.prototype = {

    initializeDb: function(db, callback) {
        db.run("CREATE TABLE testing " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "info TEXT)", callback);
    },
    getDb: function( ) {
        var deferred = Q.defer();
        if (null == this.db) {
            var self = this;
            this.db = new sqlite3.Database(":memory:");
            this.initializeDb(this.db, function(err) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(self.db);
                }
            });
        } else {
            deferred.resolve(this.db);
        }
        return deferred.promise;

    }
}





