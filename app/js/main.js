$(function () {
  
  $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__btn').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close');
  });
  
  $('.chair__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
  
  $('.contact-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    arrows: false
  });
  
  $('.article-slider__box').slick({
    prevArrow : '<button type = "button" class="article-slider__arrow article-slider__arrowleft "><img src = "images/Path__left.svg" alt="path left"></button>',
    nextArrow : '<button type = "button" class="article-slider__arrow article-slider__arrowright "><img src = "images/Path__right.svg" alt="path right"></button>'
  });
  
  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
    
  });
})