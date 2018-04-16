var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request,response){
// see in our server what the client is requesting
console.log('client request URL: ', request.url);
// index file
if(request.url ==="/"){
fs.readFile('index.html','utf8', function(errors, contents){
response.writeHead(300, {'Content-Type': 'text/html'});
// write to the client side
response.write(contents);
response.end()
} )
}
// dojos file
else if (request.url ==="/dojos"){
// read file
fs.readFile('dojos.html','utf8', function(errors,contents){
//  what type of file
response.writeHead(300, {'Content-Type': 'text/html'});
response.write(contents);
response.end();
})
}
else if (request.url ==="/dojos/new"){
fs.readFile('ninjas.html', 'utf8', function(errors, contents){
response.writeHead(300, {'Content-Type': "text/html"});
response.write(contents);
response.end();
})
}
// linking style sheet in node
else if (request.url ==="/stylesheet/index.css"){
fs.readFile('./stylesheet/index.css', 'utf8', function(errors, contents){
response.writeHead(200, {'Content-Type': "text/css"});
response.write(contents);
response.end();
});
}
// error page bello
else {
response.writeHead(404);
response.end("file does not exit");
}
})
server.listen(9999);
// print to terminal window
console.log("Running in localhost at port 9999");