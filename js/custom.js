$(document).ready(function () {
  $("#slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
  });

  $("#slider").on("init", function (e, slick) {
   $(".single-slide:first-child").addClass('animated');
    doAnimations($firstAnimatingElements);
  });
  $("#slider").on("beforeChange", function (
    e,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".single-slide").removeClass('animated');
    $('.single-slide[data-slick-index="' + nextSlide + '"]')
    .addClass('animated');
  });

  
});
