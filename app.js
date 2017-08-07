var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mathLogic', function (req, res) {
    console.log(req.body);
    console.log(req.body.makeObject.a);
    console.log(req.body.makeObject.b);
    console.log(req.body.makeObject.op);

    var answer = {
        if(req.body.makeObject.op == '+') {
            answer = req.body.makeObject.a + req.body.makeObject.b;
        }else if(req.body.makeObject.op == '-') {
            answer = req.body.makeObject.a - req.body.makeObject.b;
        } else if(req.body.makeObject.op == '*') {
            answer = req.body.makeObject.a * req.body.makeObject.b;
        } else if (req.body.makeObject.op == '/') {
            answer = req.body.makeObject.a / req.body.makeObject.b;
        };
    };

    console.log(answer);
    res.send(answer);
    res.sendStatus(201);
})//end of app.post

app.listen(port, function () {
    console.log("listening on port:", port)
})