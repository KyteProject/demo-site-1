/*****************************************/

/* Author: radekthemes */
/* Template: Marek - Personal Portfolio */
/* Version: 1.0 */

/*****************************************/

//Document on ready functions
$(document).ready(function(){
  "use strict";

  /*************************/
  /*       PRELOADER       */
  /*************************/
  //After 2s preloader is fadeOut
  $('.preloader').delay(2500).fadeOut('slow');
  setTimeout(function() {
    //After 2.5s, the no-scroll class of the body will be removed
    $('body').removeClass('no-scroll');
  }, 2500); //Here you can change preloader time

  /*************************/
  /*  EFFECT AFTER SCROLL  */
  /*************************/
  $(window).on('scroll',function() {
    var buttonUp = $('.button-up'), //scroll-top btn
        navbarFixedTop = $('.navbar-fixed-top');
    // Adding background for .navbar after scroll more than 220
    if ($('.navbar').offset().top > 220) {
      $(navbarFixedTop).addClass('top-nav-collapse');
      $(buttonUp).fadeIn(300);
    } else {
    //Removing all adding styles
      $(navbarFixedTop).removeClass('top-nav-collapse');
      $(buttonUp).fadeOut(300);
    }
  });

  //Close the menu by clicking on the link
  $('.navbar-nav li a').on('click', function() {
   //Check if window is small enough so dropdown is created
   var toggle = $('.navbar-toggle').is(':visible');
   if (toggle) {
     //After click on link in menu navbar is close
     $('.navbar-collapse').collapse('hide');
   }
  });

  /*************************/
  /*      SMOOTH SCROLL    */
  /*************************/
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
      var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 87,
        }, 1000);
        return false;
      }
    }
  });

  /*************************/
  /*  PORTFOLIO FILTERING  */
  /*************************/
  var portfolioFilter = $('.filter-button li'),
      portfolioWork = $('.portfolio-grid');
      $(portfolioFilter).click(function(){
        var value = $(this).attr('data-filter');
        if(value === "all") {
          $(portfolioWork).show('80');
        } else {
          //Hide portfolio work
          $(portfolioWork).not('.'+value).hide('80');
          //Show portfolio work
          $(portfolioWork).filter('.'+value).show('80');
        }
        //Add / remove active class from filter button
        $(this).addClass('active').siblings().removeClass('active');
      });

  /*************************/
  /*      OWL SLIDERS      */
  /*************************/
  //Banner slider options
  $('.banner-slider-owl').owlCarousel({
    nav:true,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    dots:true,
    loop:true,
    smartSpeed: 900,
    autoplayTimeout: 5000,
    autoplay:true,
    mouseDrag: false,
    margin: 0,
    items: 1,
    animateOut: 'fadeOutDown',
    animateIn: 'bounceInDown'
  });

  //Testiomials section options
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed :900,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

  /********************/
  /*    WOW.JS INIT   */
  /********************/
  var wow = new WOW({
    mobile: false //Off animations on mobile devices
  });
  wow.init();

 /****************************/
 /*   MAGNIFICPOPUP OPTIONS  */
 /****************************/
 $('.grid-item').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    removalDelay: 400,
    mainClass: 'mfp-fade' //fade effect
  });

});
