var express = require("express");
var http = require('http');
var Controller  = require('./controller.js');
var DB = require("./DB.js");

var app = express();
app.use(express.bodyParser());

app.set('port', process.env.PORT || 3000);

app.use(app.router);

app.get('/foo', Controller.indexAction.bind(Controller));
app.get('/foo/:id', Controller.fooAction.bind(Controller));
app.post('/foo', Controller.addAction.bind(Controller));

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express listens on port ' + app.get('port'));
});

