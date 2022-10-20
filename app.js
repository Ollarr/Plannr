// var http = require('http');
// var fs = require('fs');
// var express = require('express'); 

// const PORT = 3000
// server.listen(PORT, '127.0.0.3');
// console.log(`Yo dawgs, now listening at port: ${PORT}`)

// Serving HTML file
// var server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8' )
//     myReadStream.pipe(res);
// })


// Serving JSON data
// var server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     var myObj = {
//         name: 'Ola',
//         job: 'Frontend developer',
//         age: 25
//     }
// res.end(JSON.stringify(myObj))
// })

// Routing with node
// var server = http.createServer((req, res)=>{
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if (req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if (req.url === '/api/ninjas'){
//         var ninjas = [{name: 'Ola', age: 25}, {name: 'Uvashi', age:32}]
//     }
// })

// var app = express();

// // the set method is used tell express that onw will like to use EJS as the templating engine
// app.set('view engine', 'ejs');

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname + '/index.html')

// });
// app.get('/contact', (req, res)=>{
//     res.sendFile(__dirname + '/contact.html')

// });
// app.get('*', (req, res)=>{
//     res.sendFile(__dirname + '/404.html')

// });

// app.get('/profile/:name', (req, res) => {
//     res.render('profile', {person: req.params.name})
// })

// app.listen(5000);