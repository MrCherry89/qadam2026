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
  
const zoomItems = document.querySelectorAll('.zoom-on-scroll, .zoom-on-scroll2');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target); // снимаем наблюдение, чтобы анимация срабатывала один раз
    }
  });
}, {
  threshold: 0.3
});

// Начинаем наблюдать за каждым элементом
zoomItems.forEach(item => observer.observe(item));

});
