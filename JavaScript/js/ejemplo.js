$(function () {
    $('#boton').click(function () {
        $('#resultado').html('¿Qué tal ' + $('#dato')[0].value + '?');
        $.getJSON('datos/datos.json').done(function (datos) {
            alert('alsdkjfads');
        });
    });
});

/*
window.onload = function () {
    var boton = document.getElementById('boton');

    boton.onclick = function () {
        var dato = document.getElementById('dato');

        var resultado = document.getElementById('resultado');
        
        resultado.innerHTML = 'Hola ' + dato.value;
    };
};
*/
