$(function () {
  //  !JQUERY
  
  //!Features-slider
  $('.features__carousel').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  //!Weapons-slider
  $('.weapons__slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  //!Animals-slider
  $('.animals__slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  //!Faction-slider
  $('.faction__slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  //!Experience-slider
  $('.experience__carousel').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  // !Append to
  if ($(window).width() < 1110) {
    $('.hero__bottom-socials').appendTo($('.navbar'));
  };
})