var express = require('express');
var body = require('body-parser')

var app = express();

var port = 3000

app.use(express.static('public'))

app.post('/mathLogic', function(req, res){
    var answer = "need inputs"
    answer = req.body.inputOne,req.body.operator, req.body.inputTwo
    
    console.log (req.body.inputOne,req.body.operator, req.body.inputTwo);
    res.send(answer);
    res.sendStatus(201);
})