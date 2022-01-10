const http = require("http"); 
const fs = require("fs");
const { buffer } = require("stream/consumers");
const server = http.createServer((req, res) => { const url = req.url;
const method = req.method;
if ( url === "/") {
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message" value= ""></form></body>');
    res.write("</html>");
    return res.end();
}
if (url === "/message" &amp&ampmethod === "POST") { const body = [];
req.ondata("data", (chunk) => {
    console.log(chunk); body.push(chunk);
});
req.on("end",() => {
    const parseBody= Buffer.concat(body).toString();
    const message = parseBody.split("=") [1];
    fs.writeFileSync("testing.txt", message);
});
res.statusCode = 302;
res.setHeader ("Location", "/");
return res.end();
}
res.setHeader ("Content-Type", "Text/html");
res.write("<html>");
res.write("<head><title> Server Page Second </title></head>");
res.write("<body><h2> Welcome to the Iternet </h2></body>");
res.write("</html>");
return res.end();
});
server.listen(3000);
