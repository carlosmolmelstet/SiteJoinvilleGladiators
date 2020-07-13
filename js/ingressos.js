

/*MUDAR INFOS */
function displayVal() {
    /*VARIAVEIS */
    var titulojogo = $("#opicao").val();
    var jogo1 = 'GLADIATORS VS BREAKERS'
    var jogo2 = 'BLACK HALWKS VS GLADIATORS'
    var jogo3 = 'GLADIATORS VS ISTEPOS'
    var jogo4 = 'T-REX VS GLADIATORS'
    var jogo5 = 'GLADIATORS VS VIKINGS'
    var jogo6 = 'GLADIATORS VS ALMIRANTES'
    /*TITULO */
    $(".jogo").html(titulojogo);
    /*JOGO 1 */
    if (titulojogo == jogo1) {
        $('.A').removeClass('desativo');
        $('.B').addClass('desativo');
        $('.C').addClass('desativo');
        $('.D').addClass('desativo');
        $('.E').addClass('desativo');
        $('.F').addClass('desativo');
    }
    /*JOGO 2 */
    if (titulojogo == jogo2) {
        $('.B').removeClass('desativo');
        $('.A').addClass('desativo');
        $('.C').addClass('desativo');
        $('.D').addClass('desativo');
        $('.E').addClass('desativo');
        $('.F').addClass('desativo');
    }
    /*JOGO 3 */
    if (titulojogo == jogo3) {
        $('.C').removeClass('desativo');
        $('.A').addClass('desativo');
        $('.B').addClass('desativo');
        $('.D').addClass('desativo');
        $('.E').addClass('desativo');
        $('.F').addClass('desativo');
    }
    /*JOGO 4 */
    if (titulojogo == jogo4) {
        $('.D').removeClass('desativo');
        $('.A').addClass('desativo');
        $('.B').addClass('desativo');
        $('.C').addClass('desativo');
        $('.E').addClass('desativo');
        $('.F').addClass('desativo');
    }
    /*JOGO 5 */
    if (titulojogo == jogo5) {
        $('.E').removeClass('desativo');
        $('.A').addClass('desativo');
        $('.B').addClass('desativo');
        $('.C').addClass('desativo');
        $('.D').addClass('desativo');
        $('.F').addClass('desativo');
    }
    /*JOGO 6 */
    if (titulojogo == jogo6) {
        $('.F').removeClass('desativo');
        $('.A').addClass('desativo');
        $('.B').addClass('desativo');
        $('.C').addClass('desativo');
        $('.D').addClass('desativo');
        $('.E').addClass('desativo');
    }




}


$("select").change(displayVal);
displayVal();
/*CALCULAR VALOR */
$(".quantidade")
    .keyup(function () {
        var valor = $(this).val();
        $(".valor").text('R$:' + valor * 25 + ',00');
    })
    .keyup();

