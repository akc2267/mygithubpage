$(document).ready(function() {

    $('a[href="#about"]').click(function() {
        event.preventDefault();
         $('html, body').animate( {scrollTop: $("#about").offset().top }, 400 );
    }); 

});

