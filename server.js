//todo
var http = require('http');
var foo = require('./foo.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(foo());
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
