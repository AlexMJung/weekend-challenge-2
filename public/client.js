$(document).ready(function () {
function data(op, a, b) {
    this.op = op;
    this.a= a;
    this.b= b;
}
    $('#add').on('click', function () {
        var object = new data("+", $('#inputOne').val(), $('#inputTwo').val());
        sendRequest(object);
        console.log(object);
    })//end of add

    $('#subtract').on('click', function () {
         var object = new data("-", $('#inputOne').val(), $('#inputTwo').val());
        sendRequest(object);
        console.log(object);
    })//end of subtract

    $('#multiply').on('click', function () {
        var object = new data("*", $('#inputOne').val(), $('#inputTwo').val());
        sendRequest(object);
        console.log(object);    
    })//end of multiply

    $('#divide').on('click', function () {
        var object = new data("/", $('#inputOne').val(), $('#inputTwo').val());
        sendRequest(object);
        console.log(object);
    })//end of divide

    
    $('#clearButton').on('click', function () {
        console.log('clear button clicked');
        $('#inputOne').val(''),
        $('#inputTwo').val(''),
        sendClearRequest();        
    })//end of clear code


    function sendRequest(req) {
        $.ajax({
            method: "post",
            url: "/mathLogic",
            data: req,
            success: function (response) {
                getAnswer();
            }//end of success
        })//end of ajax
    };//end of sendRequest

function getAnswer(){
    $.ajax({
        method: "get",
        url: "/mathLogic",
        success: function (response) {
                number = parseInt(response)
                $('#answer').append('<p>' + number + '</p>')
            }//end of success
    })//end fo ajax
}//end of getAnswer

    function sendClearRequest(){
        $.ajax({
            method: "get",
            url: "/clear",
            success: function (response){
            $('#answer').empty()
            }//end of success
        })//end of ajax    
    };//end of sendClearRequest

})//end of document.ready