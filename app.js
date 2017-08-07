var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var port = 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

var answer = {mathResult: 0};

app.post("/mathLogic", function (req, res) {
    console.log(req.body);
    var a = parseInt(req.body.a);
    var b = parseInt(req.body.b);
    switch (req.body.op) {
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break;
        case "*":
            answer = a * b;
            break;
        case "/":
            answer = a / b;
            break;

    }//end of switch


    console.log(answer);
    res.sendStatus(201);
})//end of app.post

app.get('/mathLogic', function(req, res){
    console.log('getting the answer')
    res.send(''+ answer)
})

app.get('/clear', function (req, res) {
    res.send("cleared");
})//end of app.get

app.listen(port, function () {
    console.log("listening on port:", port)
})