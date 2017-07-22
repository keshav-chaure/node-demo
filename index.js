console.log("Hi");

var http = require('http');
var url = require('url');
var fs = require('fs');
var dt = require('./myfirstmodule');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time are currently: " + dt.myDateTime());
    //res.write(req.url);
    //res.end('Hello World!');
/* some
//http://localhost:8080/?year=2017&month=July
     var q = url.parse(req.url, true).query;
      var txt = q.year + " " + q.month;
      res.end(txt);
  */  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
