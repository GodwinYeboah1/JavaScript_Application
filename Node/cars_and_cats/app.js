import { url } from 'inspector';

var http = require('http')
var fs = require('fs')
var urls = require('./urls')

var server = http.createServer(function(request,response){
    console.log('client request URL: ', request.url);
    console.log("this is my url object ", url);
    // step1 find the url with the request.url
    // what url are you looking for ?

    
    let check = request.url in urls;
    console.log(check)
    // optimi=zed my code
    if (request.url in urls){
        fs.readFile(urls[request.url], (err,contents) =>{
            res.writeHead(300,{'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        })
    }

    // if(request.url ==='/cars'){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./views/cars.html', 'utf8', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"text/html"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==='/cats'){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./views/cats.html', 'utf8', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"text/html"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==='/cars/new'){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./views/carForm.html', 'utf8', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"text/html"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/stylesheets/index.css"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./stylesheets/index.css', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"text/css"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/images/bmw1.gif"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./images/bmw1.gif', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"image/gif"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/images/bmw2.png"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./images/bmw2.png', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"image/png"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/images/bmw3.jpg"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./images/bmw3.jpg', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"image/jpg"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/images/cats1.jpg"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./images/cats1.jpg', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"image/jpg"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/images/cat2.jpg"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./images/cat2.jpg', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"image/jpg"});
    //         response.write(content);
    //         response.end();
    //     });
    // }
    // else  if(request.url ==="/images/cat3.jpg"){
    //     // second step 
    //     // what url do you want to render
    //     fs.readFile('./images/cat3.jpg', function(error,content){
    //         // step three 
    //         // what area zone  200- 300 are good  and what type of file being are being sent
    //         response.writeHead(300 ,{'Context-Type':"image/jpg"});
    //         response.write(content);
    //         response.end();
    // //     });
    // }
    // else {
    //     response.writeHead(404);
    //     response.end("file does not exit ");

    // }







})
server.listen(8888)
console.log("Running in localhost at port 8888");
