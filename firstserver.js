var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' }); //A more concise way to set both status code and headers simultaneously. i.e we ommit the setHeader Method


    var paths = './Folder/'
    switch (request.url) {
        case '/':
            paths += '/index.html'
            response.statusCode = 200
            // response.statusMessage('Succesfully Loaded')
            break;

        case '/about':
            paths += 'about.html'
            response.statusCode = 200
            // response.statusMessage('Succesfully Loaded')
            break;

        case '/contactus':
            paths += 'contactus.html'
            response.statusCode = 200
            // response.statusMessage('Succesfully Loaded')
            break;

        default:
            paths += '404.html'
            response.statusCode = 404
            // response.statusMessage('Page Not Found')
            break;
    }


    fs.readFile(paths, (error, data) => {
        console.log(error ? error : response.end(data));
    })


    // response.end('Hello World'); //Writes the response to that specified string and ends/closes  that response.
}).listen(3000, 'localhost');

console.log('Server running at http://127.0.0.1:3000/');

