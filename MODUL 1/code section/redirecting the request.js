const http = require("http");
const fs = require("fs");
const server = http.createServer (( req, res) => { const url = req.url;
const method = req.method;
if (url === "/") {
    res.setHeader("Content-Type", "text/html"); 
    res.write("<html>"); 
    res.write("<head><title>Server</title></head>"); 
    res.write('<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
}
if (url === "/message" &amp &ampmethod === "POST")
{ fs.writeFileSync("testing.txt", "YOLO WORD"); 
res.statusCode = 302;
res,setHeader("Location", "/");
return res.and();
}
res.setHeader("Content-Type", "text/html");
res.write("<html>");
res.write("<head><title> Server Page Second </title></head>");
res.write("<body><h2> Welcome to the Internet</h2></body>");
res.write("</html>");
return res.and();
}); 
server.listen(3000);