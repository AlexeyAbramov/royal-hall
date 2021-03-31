$(document).ready(function () {
  $("#phone").mask("+7(999) 999-99-99");
  $("#phone__reserve").mask("+7(999) 999-99-99");
});

$(".menu__list").slick({
  slidesToShow: 3,
  autoplay: true,
  infinite: true,
  pauseOnFocus: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".gallery__list").slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  dots: true,
  pauseOnFocus: false,
  prevArrow:
    '<div class="gallery__prev arrow"><span class="prev__arrow"></span></div>',
  nextArrow:
    '<div class="gallery__next arrow"><span class="next__arrow"></span></div>',
  responsive: [
    {
      breakpoint: 1031,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        centerMode: false,
      },
    },
  ],
});

$("#popup__close").on("click", function () {
  $("body").removeClass("overflow");
  $("#popup").removeClass("active");
  $(".form-popup").removeClass("active");
  $(".thanks-popup").removeClass("active");
});

$(".thanks-popup__close").on("click", function () {
  $("body").removeClass("overflow");
  $("#popup").removeClass("active");
  $(".form-popup").removeClass("active");
  $(".thanks-popup").removeClass("active");
});

$("div.link").on("click", function () {
  $("body").addClass("overflow");
  $("#popup").addClass("active");
  $(".form-popup").addClass("active");
});

$(".form-popup").submit(function (e) {
  e.preventDefault();
  $(".form-popup").removeClass("active");
  $(".popup__thanks").addClass("active");
});

$header__top = $(".header-top");
$(window).scroll(function () {
  if (window.pageYOffset === 0) {
    $header__top.removeClass("sticky");
    $('.header').removeClass('scroll');
  } else {
    $header__top.addClass("sticky");
    $('.header').addClass('scroll');
  }
});


$('#nav-header__menu').click(function(){
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  $("body").toggleClass("overflow");
})