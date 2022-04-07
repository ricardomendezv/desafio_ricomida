$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip()
    
    $('#enviarCorreo').click(function () {
        alert('El correo fue enviado correctamente...')
    });

    $('h4').dblclick(function () {
        $(this).addClass("dblclick");
    });

    $(".card-body h3").click(function () {
        $(".card-body p").toggle();
    });
})