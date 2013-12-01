var sqlite3 = require("sqlite3");
var Q = require("q");

var Container = module.exports = function() {
    this.db = null;
}

Container.prototype = {

    initializeDb: function(db, callback) {
        db.run("CREATE TABLE testing " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "info TEXT)", callback);
    },
    getDb: function( ) {

        if (null == this.db) {
            var deferred = Q.defer();
            var self = this;
            this.db = new sqlite3.Database(":memory:");
            this.initializeDb(this.db, function(err) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(self.db);
                }
            });
            return deferred.promise;
        } else {
            return this.db;
        }

    },
    initialize: function() {
        var dfd = Q.defer();
        this.getDb().then( function() {
            dfd.resolve();
        });
        return dfd.promise;
    }
}





