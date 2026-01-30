var header = $('.header'),
    scrollPrev = 0,
    blackEl = $('.change-black-element'),
    classChange = 'white-elements-header';

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > 0) {
		header.addClass('is-scrolled');
	}

  if (scrolled == 0) {
		header.removeClass('is-scrolled');
	}

	scrollPrev = scrolled;

  var thisWindow = $(window),
  scrollPositions = parseFloat(thisWindow.scrollTop());
  header.removeClass(classChange);
  blackEl.each(function (index, element ) {
    var blackBlockTop = parseFloat($(element).offset().top),
    blackBlockBottom = parseFloat($(element).outerHeight() + blackBlockTop);
    if (scrollPositions  > blackBlockTop && blackBlockBottom > scrollPositions){
      header.addClass(classChange);
    }
  });
};

var scrollerSideOffset = 40;
var swiper;

$(document).ready(function() {
  resize_scroll();

  if ($('body').width() >= 1280) {
    scrollerSideOffset = (window.innerWidth - 1290) / 2;
  }

  swiper = new Swiper('.js-exp', {
    loop: false,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetAfter: 24,
    slidesOffsetBefore: 24,
    watchOverflow: true,

    navigation: {
      nextEl: '.js-exp-next',
      prevEl: '.js-exp-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      1280: {
        slidesOffsetAfter: scrollerSideOffset,
        slidesOffsetBefore: scrollerSideOffset
      }
    }
  });
});

$(window).on("resize", function() {
  if ($('body').width() >= 1280) {
    scrollerSideOffset = (window.innerWidth - 1290) / 2;
    swiper.params.slidesOffsetAfter = scrollerSideOffset;
    swiper.params.slidesOffsetBefore = scrollerSideOffset;
    setTimeout(function() {
      swiper.update();
    }, 100);
  }
});

$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

$(document).on('click', '.js-popup-opener', function () {
  $('html').addClass('is-overflow');
  $('.page').addClass('is-overflow');
  $('.popup').show();
  return false;
});

$(document).on('click', '.js-popup-closer', function () {
  $('html').removeClass('is-overflow');
  $('.page').removeClass('is-overflow');
  $('.popup').hide();
  return false;
});
