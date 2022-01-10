const http = require ( "http");
const server = http.createServer(( req, res) => { const url=req.url;
if (url === "/") {     
res.setHeader("Content-Type", "Text/html"); 
res.write("<html>");
res.write("<head><title>server<title><head>");
res.write('<body><form action="/message" method="POST"><input type="text"value=""></form><?body>');    
    } 
});
server.listen(3000);