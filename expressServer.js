'use strict'

var express = require('express')
var app = express()
app.set('port', process.env.PORT || 8000);
var path = require('path');
var pathArray = path.join(__dirname, 'pets.json');
var fs = require('fs')
var url = require('url')


app.get('/pets', function(req, res, next) {
    fs.readFile(pathArray, 'utf8', function (err, data){
       if (err) throw err;
       res.send(JSON.parse(data))
    })
 })

app.get('/pets/0', function(req, res, next) {
     fs.readFile(pathArray, 'utf8', function (err, data){
        if (err) throw err;
        res.send(JSON.parse(data)[0])
     })
  })

app.get('/pets/1', function(req, res, next) {
      fs.readFile(pathArray, 'utf8', function (err, data){
         if (err) throw err;
         res.send(JSON.parse(data)[1])
      })
   })

app.use(function(req, res) {
  res.sendStatus(404);
});

var port = 8000
app.listen(port, function() {
  console.log('Listening on port: ', port);
});

module.exports = app
