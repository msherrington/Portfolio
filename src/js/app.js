$(() => {
  const $header = $('header');
  const $window = $(window);
  const $links = $('nav a');
  const $arrow = $('#arrow');
  const $projects = $('#projects-link');
  const $menu = $('.menu');

  $window.scroll(updateHeader).trigger('scroll');
  $links.on('click', scrollToSection);
  $arrow.on('click', scrollToSection);
  $projects.on('click', scrollToSection);
  $menu.on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function updateHeader() {
    const bottomOfHeader = $header.offset().top + $header.height();
    const viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  function scrollToSection() {
    if ($window.width() <= 720) {
      $('.dropdown').slideUp();
    }
    const section = $(this).attr('link');
    $('html, body').animate( {
      scrollTop: $(section).offset().top
    }, 1500);
  }

});
