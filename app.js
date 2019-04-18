var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var PostController = require('./postController')

var app = express();
app.use(express.json());

app.listen(8083);
console.log('listening on port 8083');

mongoose.connect('mongodb://localhost:27017/demo-mongo', {useNewUrlParser: true});
console.log('successfully connected to demo-mongo database');

PostController(app);