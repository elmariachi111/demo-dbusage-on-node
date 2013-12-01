var Controller = module.exports = function(container) {
    this.container = container;
}

Controller.prototype =  {
    indexAction: function(req, res) {
        var db = this.container.getDb();
        db.all(
           "SELECT * FROM testing",
            function(err, rows) {
                res.json(rows);
            });
    },
    fooAction: function(req, res) {
        var db = this.container.getDb();
        db.get(
            "SELECT * FROM testing WHERE id = $id",
            {$id:req.params.id},
            function(err, row) {
                res.json(row);
            });
    },
    addAction: function(req, res) {
        var db = this.container.getDb();
        db.run(
            "INSERT INTO testing (info) VALUES ($info)",
            {$info: req.body.info},
            function(err) { //this: statement
                res.json({ lastId: this.lastId});
            });
    },
    route: function(app) {
        app.get('/foo', this.indexAction.bind(this));
        app.get('/foo/:id', this.fooAction.bind(this));
        app.post('/foo', this.addAction.bind(this));
    }

}
