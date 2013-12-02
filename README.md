demo-dbusage-on-node
====================

Demonstrates various ways how to handle db connections in a node application

See my article on [Wordpress](http://stadolf.wordpress.com/2013/12/02/wiring-up-dependencies-in-node-js-wrap-up-of-my-best-practices-2/) for explanations. To install simply clone the repo and `npm install`. The examples are in ioc_1 - ioc3 and in nodeonly. Enter one of those directories and type node app.js. Then use your [favorite REST-client](http://www.getpostman.com/) to access the routes 

`GET /foo` -> lists all entries in the database

`POST /foo` -> (set `Content-type: application/json` header) + body `{"info":"bar"}`

`GET /foo/1` -> show entry with id 1



