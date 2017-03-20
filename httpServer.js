'use strict'

const http = require('http');
const url = require('url')
const fs = require('fs')
var path = require('path');
const pathArray = path.join(__dirname, 'pets.json');
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json');
  fs.readFile(pathArray, 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  if (req.method === 'GET' && req.url === '/pets'){
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(data)
  }
  else if (req.method === 'GET' && req.url === '/pets/0') {
  // console.log(JSON.parse(data)[0]);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(JSON.parse(data)[0]))
  }
  else if (req.method === 'GET' && req.url === '/pets/1') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(JSON.parse(data)[1]))
  }
  else if (req.method === 'GET' && req.url === '/pets/2') {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found')
  }
  else if (req.method === 'GET' && req.url === '/pets/-1') {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found')
  }
})

});

server.listen(port, function() {
  console.log('Listening on port', port);
});


module.exports = server;
