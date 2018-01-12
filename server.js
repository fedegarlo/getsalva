#!/bin/env node

var ipaddress = process.env.HOST || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    port      = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    express = require('express'),
    app      = express(),
    path = require('path'),
    http = require('http'),
    server = http.createServer(app);

app.configure(function() {
    var cacheTime = 0;
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public/index.html'), { maxAge: cacheTime }));
});


app.get('/', function(request, response) {
    response.render('index.html');
});

server.listen(port, ipaddress);
console.log('Listening  to  port ' + port);

