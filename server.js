var http=require('http');

var server=http.createServer(function(req,res){
console.log('request was made'+req.url);
    res.writeHead(200,{'content-type':'text/plain'});
res.end('hello ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('server is listening');