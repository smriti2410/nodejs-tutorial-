const http = require ('http');

const server = http.createServer((req,res) =>{

    const url= req.url;
    const method= req.method;


    if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/meesage" method ="POST"><input type="text" name="message" ><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); // do not continue the further code and exit the function simply 
    }


    res.setHeader('content-type','text/html');

    res.write('<html>')
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>my first node,js server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
