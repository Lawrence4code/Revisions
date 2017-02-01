var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('<html><head> <title> Testing Middleware </title></head> <body> Body of the testing middleware.</body> </html>')
});

app.listen(3000);