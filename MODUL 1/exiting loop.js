const http = require ( "http");
const server = http.createServer(( req, res) => {
    console.log(req.url, req.method, req.headers);
// process.xit();
});
server.listen(3000);