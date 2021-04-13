const http = require('http');
const url = require('url');
const port = 8080;

var students = [
    {
        Name: "Ankit",
        Branch: "IT"
    },
    {
        Name: "Riya",
        Branch: "CS"
    },
    {
        Name: "Surabhi",
        Branch: "IT"
    },
    {
        Name: "Sakshi",
        Branch: "Mechanical"
    },
    {
        Name: "Komal",
        Branch: "Architecture"
    }
];

const server = http.createServer((req, res) => {
   console.log("req method ", req.method);
   console.log("req url ", req.url);

   console.log("req query ", req.query);

   const queryObject = url.parse(req.url,true).query;
   console.log("queryObject  ", queryObject);

   if (req.method !== 'GET') {
       res.end(`{error: "${http.STATUS_CODES[405]}"}`)
   } else {
       if (req.url.startsWith('/student?branch=')) {
           var ans = [];
           for(let i in students){
               if(queryObject.branch === students[i].Branch) {
                   //res.write(JSON.stringify(students[i]))
                   ans.push(students[i]);
               }
           }
           res.write(JSON.stringify(ans))
           res.end();
       }
   }
});

server.listen(port, () => {
   console.log(`Server listening on port ${port}`);
})
