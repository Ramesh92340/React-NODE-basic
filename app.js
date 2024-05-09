var http = require('http');
http.createServer(function (req, res) {
  res.end('Hello World!');
}).listen(3000);



// File reading file
// var http = require('http');

// var date = require("./myfirstmodule");
// http.createServer(function (req, res) {
//   res.write("The date and time is currently: " + date.myDateTime());
//   res.end();
// }).listen(3000);


              
// var http = require('http');
// var url = require("url");

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
  
//   res.end("utjutjuyt");
// }).listen(3001);


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);




