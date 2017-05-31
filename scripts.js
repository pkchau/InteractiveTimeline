//function to have divs containing images and text to fade in as user scrolls
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* Adjust the "100" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window;
            if(bottom_of_window > bottom_of_object + 100) {
              if ($(this).is('[class*="center"]')) {
                $(this).addClass("animated fadeIn");
              }
              else {
              if($(this).parent().parent().hasClass("left")) {
              $(this).addClass("animated fadeInLeft");
            }
            if ($(this).parent().parent().hasClass("right")) {
              $(this).addClass("animated fadeInRight");
            }
          }
          }
        });
        $('[class*=title]').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* Adjust the "100" to either have a delay or that the content starts fading a bit before you reach it  */
          bottom_of_window = bottom_of_window;
          if(bottom_of_window > bottom_of_object + 100) {
            $(this).addClass("animated fadeIn");
        }
      });
    });
});

//Add navigation bar with smooth scrolling to each section
$(document).ready(function(){
 // Add scrollspy to <body>
 $('body').scrollspy({target: ".navbar", offset:200});

 // Add smooth scrolling on all links inside the navbar
 $("#myNavbar a").on('click', function(event) {
   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
     var hash = this.hash;

     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){

       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
     });
   }  // End if
 });
});
