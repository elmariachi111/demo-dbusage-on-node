var express = require("express");
var http = require('http');
var Controller = require('./controller.js');
var Container = require("./ioc.js");

var app = express();
app.use(express.bodyParser());

app.set('port', process.env.PORT || 3000);

var container = new Container();
container.initialize().then( function() {
    new Controller(container).route(app);
    app.use(app.router);

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express listens on port ' + app.get('port'));
    });
});

