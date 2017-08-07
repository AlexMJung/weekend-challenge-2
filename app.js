var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/mathLogic", function (req, res) {
    console.log(req.body);
    console.log(req.body.data.a);
    console.log(req.body.data.b);
    console.log(req.body.data.op);
    
    var answer = req.body.data.a + req.body.data.op + req.body.data.b;

    console.log(answer);
    res.send(answer);
    res.sendStatus(201);
})//end of app.post

app.get('/clear', function(req, res){
    res.send(cleared);
    res.sendStatus(201);
})//end of app.get

app.listen(port, function () {
    console.log("listening on port:", port)
})