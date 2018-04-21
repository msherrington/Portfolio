'use strict';

$(function () {
  var $header = $('header');
  var $window = $(window);
  var $links = $('nav a');
  var $arrow = $('#arrow');
  var $projects = $('#projects-link');
  var $menu = $('.menu');

  $window.scroll(updateHeader).trigger('scroll');
  $links.on('click', scrollToSection);
  $arrow.on('click', scrollToSection);
  $projects.on('click', scrollToSection);
  $menu.on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function updateHeader() {
    var bottomOfHeader = $header.offset().top + $header.height();
    var viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  function scrollToSection() {
    var section = $(this).attr('link');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1500, function () {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }
});