/*SELEÇÃO DE BOX*/
$(function () {
    /*ATIVA BOX 1 */
    $('.menu1').click(function () {
      $('.box1').removeClass('desativo');
      $('.box2').addClass('desativo');
    })
    /*ATIVA BOX 2*/
    $('.menu2').click(function () {
      $('.box2').removeClass('desativo');
      $('.box1').addClass('desativo');
    })
});