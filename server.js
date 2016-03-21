//todo
var http = require('http')
var foo = require('./foo.js')
var express = require('express')
var morgan = require('morgan')
var uuid = require('node-uuid')

morgan.token('id', function getId(req) {
  return req.id
})

var app = express()

app.use(assignId)
app.use(morgan(':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time'))

app.get('/', function (req, res) {
  res.status(200).send('hello, world!')
})

function assignId(req, res, next) {
  req.id = uuid.v4()
  next()
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(foo())
}).listen(8080, '127.0.0.1')
console.log('Server running at http://127.0.0.1:8080/')
*/
