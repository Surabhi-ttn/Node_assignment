const http = require('http');
const url = require('url');
const port = 8080;

var users = [
    {
        Username: "ankitpahwa111",
        Password: "ankit9899",
        FirstName: "Ankit",
        LastName: "Pahwa"
    },
    {
        Username: "chaurasiasurabhi",
        Password: "surabhi123",
        FirstName: "Surabhi",
        LastName: "Chaurasia"
    },
    {
        Username: "jainsakshi",
        Password: "sakshi15",
        FirstName: "Sakshi",
        LastName: "Jain"
    },
    {
        Username: "riyarohilla",
        Password: "riya123",
        FirstName: "Riya",
        LastName: "Rohilla"
    },
    {
        Username: "gaursakshi",
        Password: "sakshi123",
        FirstName: "Sakshi",
        LastName: "Gaur"
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
       if (req.url.startsWith('/user?username=')) {
           for(let i in users){
               if(queryObject.username === users[i].Username) {
                   res.write(JSON.stringify(users[i]))
               }
           }
           res.end()
       }
   }
});

server.listen(port, () => {
   console.log(`Server listening on port ${port}`);
})
