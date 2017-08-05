$(document).ready(function(){


console.log(inputOne);
console.log(inputTwo);

$('#add').on('click', function(){ 
operator = "+" ;
makeObject();
})//end of add

$('#subtract').on('click', function(){ 
operator = "-";
makeObject();
})//end of subtract

$('#multiply').on('click', function(){ 
operator = "*";
makeObject();
})//end of multiply

$('#divide').on('click', function(){ 
operator = "/";
makeObject(); 
})//end of divide

function makeObject(){
    var object = {
inputOne: $('#inputOne').val(),
inputTwo: $('#inputTwo').val(),
operator: operator,
}
console.log(object);
}//end of makeObject



function sendRequest(){
    $.ajax({
        method: "post",
        url: "/mathLogic",
        data: {object},
        success: function(response){
            $('#answer').append('<p>'+ response +'</p>')
        }//end of success

    })//end of ajax
};//end of sendRequest

})//end of document.ready