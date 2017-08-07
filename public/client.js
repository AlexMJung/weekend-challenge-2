$(document).ready(function () {

    $('#add').on('click', function () {
        makeObject = {
            op: "+",
            a: $('#inputOne').val(),
            b: $('#inputTwo').val(),
        }
        sendRequest();
        console.log(makeObject);
    })//end of add

    $('#subtract').on('click', function () {
        makeObject = {
            op: "-",
            a: $('#inputOne').val(),
            b: $('#inputTwo').val(),
        }
        sendRequest();
        console.log(makeObject);
    })//end of subtract

    $('#multiply').on('click', function () {
        makeObject = {
            op: "*",
            a: $('#inputOne').val(),
            b: $('#inputTwo').val(),
        }
        sendRequest();
        console.log(makeObject);
    })//end of multiply

    $('#divide').on('click', function () {
        makeObject = {
            op: "/",
            a: $('#inputOne').val(),
            b: $('#inputTwo').val(),
        }
        sendRequest();
        console.log(makeObject);
    })//end of divide


    console.log(makeObject);

    function sendRequest() {
        $.ajax({
            method: "post",
            url: "/mathLogic",
            data: { makeObject },
            success: function (response) {
                parseInt(response.x);
                console.log(response.x);
                parseInt(response.y);
                console.log(response.y);
                parseInt(response.z);
                console.log(response.z);
                var math = response.x + response.y + response.z;
                console.log(math);
                $('#answer').append('<p>' + math + '</p>')
            }//end of success
        })//end of ajax
    };//end of sendRequest

})//end of document.ready