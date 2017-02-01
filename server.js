console.log('Staring server.js file.');

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use('/assets', express.static(__dirname + '/public'));     // Static file and assets route.

app.use('/', function(req, res, next) {                        // custom middleware provided by express.
    console.log(`Request URL: ${req.url}`);                    // req is a object and url a property.
    next();                                                    // With calling next the app won't move to the next code and app with eventually crash.
})

app.use(cookieParser(), function(req,res, next) {              // custom middleware and cookie-parser module.
    console.log('Cookies: ', req.cookies);                     // Printing result for learning.
    next();                                                    // you know the reason.
});

app.get('/', (req, res) => {
    res.send('<html><head> <link href=assets/style.css type=text/css rel=stylesheet /> <title> Testing Middleware </title></head> <body> Body of the testing middleware. <ol> <li> Middleware </li> <li> Custom Middleware </li> <li> Static files </li> </ol></body> </html>')
});

app.listen(3000);                                               // app listening to the defined port.



// *** use, get, post are are middleware provided by express.
// * go through other middleware and test it.