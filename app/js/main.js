$(function () {
  
  $('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__btn').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close');
  });
  
  $('.header__btn-menu').on('click', function(){
    $('.menu').toggleClass('menu--open');
  });
  
  $('.chair__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
  
  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
        
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
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