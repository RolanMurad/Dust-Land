$(function () {
  //  !JQUERY
  
  //!Features-slider
  $('.features__carousel').slick({
    //!Main settings
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  //!Weapons-slider
  $('.weapons__slider').slick({
    //!Main settings
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.animals__slider').slick({
    //!Main settings
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
})