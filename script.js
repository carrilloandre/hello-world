$(document).ready(function(){
    $('h3').mouseenter(function(){
        $('h3').fadeTo('fast', 1);
});

$('h3').mouseleave(function(){
    $('h3').fadeTo('fast', 0.5);
    });
});