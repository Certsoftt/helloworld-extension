$(function(){
    $('#input').keyup(function(){
        $('#h1').text('Hello' + $('input').val())
    })
})