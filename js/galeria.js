/*SELEÇÃO DE BOX*/
$(function () {
    /*ATIVA TODAS */
    $('.menu1').click(function () {
        $('.lg').addClass('ativo');
        $('.fp').addClass('ativo');
        $('.lg').removeClass('desativo');
        $('.fp').removeClass('desativo');
        $('.vm1').removeClass('desativo');
        $('.vm3').removeClass('desativo');
    })
    /*ATIVA FULL PADS */
    $('.menu2').click(function () {
        $('.fp').addClass('ativo');
        $('.lg').addClass('desativo');
        $('.lg').removeClass('ativo');
        $('.fp').removeClass('desativo');
        $('.vm1').addClass('desativo');
        $('.vm3').addClass('desativo');

    })
    /*ATIVA LITTLE */
    $('.menu3').click(function () {
        $('.lg').addClass('ativo');
        $('.fp').addClass('desativo');
        $('.fp').removeClass('ativo');
        $('.lg').removeClass('desativo');
        $('.vm1').addClass('desativo');
        $('.vm3').addClass('desativo');
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
        $('.divgaleria').css('height', 'auto')
        $('.vm3').removeClass('desativo');
        $('.vm1').addClass('desativo');
    })
    $('.vm3').click(function () {
        $('.divgaleria').css('height', '800px')
        $('.vm1').removeClass('desativo');
        $('.vm3').addClass('desativo');
    })

});
