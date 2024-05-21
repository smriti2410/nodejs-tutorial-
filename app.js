const http = require ('http');

const server = http.createServer((req,res) =>{
    console.log(req);
    res.setHeader('content-type','text/html');

    res.write('<html>')
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>my first node,js server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
