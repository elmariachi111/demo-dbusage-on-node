var DB = require("./DB.js");

module.exports = {
    indexAction: function(req, res) {
        DB.all("SELECT * FROM testing",
            function(err, rows) {
                res.json(rows);
            });
    },
    fooAction: function(req, res) {
        DB.get(
            "SELECT * FROM testing WHERE id = $id",
            {$id:req.params.id},
            function(err, row) {
                res.json(row);
            });
    },
    addAction: function(req, res) {
        DB.run(
            "INSERT INTO testing (info) VALUES ($info)",
            {$info: req.body.info},
            function(err) { //this: statement
                res.json({ lastId: this.lastId});
            });
    }
}
