/*EFEITOS DE SLIDE COM SCROLL*/
(function () {
  /* SLIDE VINDO DA DIREITA*/
  var $target = $(".slide-d"),
    animationClass = "slide-d-start",
    offset = ($(window).height() * 3) / 4;
  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function () {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();
  $(document).scroll(
    debounce(function () {
      animeScroll();
    }, 100)
  );
})();
(function () {
  /* SLIDE VINDO DA ESQUERDA*/
  var $target = $(".slide-e"),
    animationClass = "slide-e-start",
    offset = ($(window).height() * 3) / 4;
  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function () {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();
  $(document).scroll(
    debounce(function () {
      animeScroll();
    }, 100)
  );
})();
/*SELEÇÃO DE BOX*/
$(function () {
  /*ATIVA BOX 1 */
  $('.menu1').click(function () {
    $('.box1').removeClass('desativo');
    $('.box2').removeClass('desativo');
  })
  /*ATIVA BOX 2*/
  $('.menu2').click(function () {
    $('.box2').addClass('desativo');
    $('.box1').removeClass('desativo');
  })
  /*ATIVA BOX 3 */
  $('.menu3').click(function () {
    $('.box1').addClass('desativo');
    $('.box2').removeClass('desativo');
  })
  /*ATIVA MENU 1 */
  $('.menu1').click(function () {
    $('.menu1').addClass('selecionado');
    $('.menu2').removeClass('selecionado');
    $('.menu3').removeClass('selecionado');


  })
  /*ATIVA MENU 2 */
  $('.menu2').click(function () {
    $('.menu2').addClass('selecionado');
    $('.menu1').removeClass('selecionado');
    $('.menu3').removeClass('selecionado');
  })
  /*ATIVA MENU 3 */
  $('.menu3').click(function () {
    $('.menu3').addClass('selecionado');
    $('.menu1').removeClass('selecionado');
    $('.menu2').removeClass('selecionado');
  })
});
/*VER MAIS */
$(function () {
  $('.vm1').click(function () {
    $('.vm2').slideToggle(500);
    $('.vm1').hide();
    $('.vm3').show();

  })
  $('.vm3').click(function () {
    $('.vm2').slideToggle();
    $('.vm3').hide();
    $('.vm1').show();
  })
});
/*NAVBAR  */
$(function() {
  $('#btnnav').click(function() {
    $('.boxnavsmall').toggle(500);
  });
});
/*CAROUSEL */
var carousel = $('#carousel'),
    threshold = 150,
    slideWidth = 500,
    dragStart, 
    dragEnd;

$('#next').click(function(){ shiftSlide(-1) })
$('#prev').click(function(){ shiftSlide(1) })

carousel.on('mousedown', function(){
  if (carousel.hasClass('transition')) return;
  dragStart = event.pageX;
  $(this).on('mousemove', function(){
    dragEnd = event.pageX;
    $(this).css('transform','translateX('+ dragPos() +'px)')
  })
  $(document).on('mouseup', function(){
    if (dragPos() > threshold) { return shiftSlide(1) }
    if (dragPos() < -threshold) { return shiftSlide(-1) }
    shiftSlide(0);
  })
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.slide:first').before($('.slide:last'));
    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
		carousel.css('transform','translateX(0px)'); 
  },700)
}
/* LINKS BANNERS */
function b1() {
  window.location.href = "full.html";
}
function b2() {
  window.location.href = "little.html";
}


