$(function(){

    $('.slider__inner').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider-right.png" alt=""></button>',
        // responsive: [
        //   {
        //     breakpoint: 900,
        //     settings: {
        //       arrows: false,
        //     }
        //   },
        // ]
      });

      $('.shop__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/shop_slider/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/shop_slider/arrow-right.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              dots: true,
            }
          },
        ]
      });

      $('.menu__btn').on('click', function(){
        $('.header__menu').slideToggle();
      });

      $('.menu__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.menu__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.menu__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });

        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
          }
        );
        wow.init(); 

});