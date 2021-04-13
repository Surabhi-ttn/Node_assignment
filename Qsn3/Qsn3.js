const http = require('http');
var fs = require("fs");
const url = require('url');
const port = 8080;

const server = http.createServer((req, res) => {
   console.log("req method ", req.method);
   console.log("req url ", req.url);

   console.log("req query ", req.query);

   const queryObject = url.parse(req.url,true).query;
   console.log("queryObject  ", queryObject);

   if (req.method !== 'GET') {
       res.end(`{error: "${http.STATUS_CODES[405]}"}`)
   } else {
    if(req.url === "/home"){
        fs.readFile("home.html", function (err, data) {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.write(data);
           res.end();
        });
     }
       else if(req.url === "/about"){
        fs.readFile("about.html", function (err, data) {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.write(data);
           res.end();
        });
     }
       else if(req.url === "/contact"){
        fs.readFile("contact.html", function (err, data) {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.write(data);
           res.end();
        });
     }
   }
});

server.listen(port, () => {
   console.log(`Server listening on port ${port}`);
})
