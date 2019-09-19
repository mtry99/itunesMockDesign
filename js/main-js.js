// Responsive Nav on small screen when the "hamburger is clicked" 
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});


//Smooth Scrolling

$('.cf a').on('click', function(event) {       // runs the function everytime an "a" link is clicked
    if (this.hash !== '') {                    // looks at # (anything).... #music, #video, #giftcards
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(                    //calls the animate method
        {
          scrollTop: $(hash).offset().top           // calls the hash variable
        },
        800,                                        // controls the speed of the action (in ms)
        function() {
          window.location.hash = hash;
        }
      );
    }
  });