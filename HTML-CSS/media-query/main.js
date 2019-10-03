$(document).ready(function () {
    $('.menu ul').slideUp();
    $('#open-menu').on('click', function(){
        event.preventDefault();
        $(this).next().slideToggle()
    }) 
});