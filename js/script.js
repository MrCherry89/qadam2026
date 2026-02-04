$(document).ready(function () {

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  })

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
    $(".header").toggleClass("bg");
});

function initPhotoSliders() {
  $('.photo-slider').each(function () {
    const $slider = $(this);

    // защита от повторной инициализации
    if ($slider.hasClass('slick-initialized')) return;

    $slider.slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
}

// запуск
$(document).ready(function () {
  initPhotoSliders();
});
  AOS.init();
});
