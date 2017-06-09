var express = require('express');
var pug = require('pug');
var path = require("path");

var app = express();

app.use('/css', express.static('dist/css'));
app.use('/fonts', express.static('dist/fonts'));
app.use('/images', express.static('dist/images'));
app.use('/script', express.static('dist/script'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/para', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index2.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});