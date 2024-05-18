let listarCarnets = document.getElementById('listarCarnets')
let btnRegistrar = document.getElementById('btnRegistrar')

listarCarnets.addEventListener('change', (event) => {
    var numCarnet = event.target.value
    var contenedorCarnets = document.getElementById('contenedorCarnets')
    var contenedorPrecios = document.getElementById('contenedor-precios')

    fetch('/rt_registro_select_carnet', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ numCarnet })
    })
        .then((response) => response.json())
        .then((response) => {
            var datos = response.datos
            contenedorCarnets.innerHTML = datos.htmlCarnets
            contenedorMontosTotales.innerHTML = datos.htmlMontosTotales
        })
        .catch(function (err) {
            console.log(err)
        })
})


