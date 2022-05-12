 let http = requiere('http');

 var server  = http.createServer((req,res) => {

    res.writeHead(200,{'content-type':'text/plain'})//mostra come contenuto testuale /html

    res.end('hello world');
 })

 server.listen(3000,'127.0.0.1')//http://127.0.0.1:3000
 console.log('Server running at http://127.0.0.1:3000')