$(document).ready(function() {

  /* Sticky Nav */
  $('.js--section-about-us').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
      $('.logo').remove();
    }
  }, {
    offset: '60px;'
  });

  /* Scroll on Buttons */
  $('.js--scroll-to-services').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000);
  });

  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
  });

  /* Navigation Smooth Scroll */

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* Animations on Scroll */

  $('.js--wp-services-row1').waypoint(function(direction) {
    $('.js--wp-services-row1').addClass('animated fadeInLeft');
  }, {
    offset: '90%'
  });

  $('.js--wp-services-row2').waypoint(function(direction) {
    $('.js--wp-services-row2').addClass('animated fadeInRight');
  }, {
    offset: '90%'
  });

  $('.js--wp-reviews').waypoint(function(direction) {
    $('.js--wp-reviews').addClass('animated fadeInUp');
  }, {
    offset: '90%'
  });

  /* Mobile Nav */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if (icon.attr('name') === 'menu') {
      icon.attr('name', 'close')
    } else {
      icon.attr('name', 'menu')
    }
  });

});