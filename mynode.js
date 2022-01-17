const http = require("http");
const server = http.createServer((req,res)=>
{
    res.writeHead( 200, { "content-Type" : 'text/plain' } )
    res.write("Welcome to my Page!\n");
    res.end('Hello world');
});
console.log("Hello You");
server.listen(80,'127.0.0.1')