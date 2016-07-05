/**
 * 
 */

$(document).ready(function () {
    desenha();
    $(window).resize(function () {
        desenha();
    });
    function desenha() {
        var largura = $('body').width();
        var half = (largura / 2)-5;
        var teste = '2,2 ' + half + ',100 ' + largura + ',2 ' + largura + ',100 ' + half + ',200 2,100';
        document.getElementById('pontos').setAttribute('points', teste);
    }
});