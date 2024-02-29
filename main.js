/*menu-bar open*/
$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  /*close nav*/
  $('.top-nav .navlink').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  /*smooth scroll from the nav*/
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate( {
        scrollTop: $($(this).attr('href')).offset().top - 100
    },  2000);
  });

  /*scroll up*/
  $('#up').on('click', function () {
    $('html, body').animate( {
      scrollTop: 0
    },  2000);
  });

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});