$(document).ready(function () {

    $(".bntCadastrar").click(function () {
        $("#cadastrar").fadeIn();
        $("#login").fadeOut();

    });

    $(".bntEntrar").click(function () {
        $("#login").fadeIn();
        $("#cadastrar").fadeOut();

    });



});