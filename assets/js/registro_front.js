let listarCarnets = document.getElementById('listarCarnets')
let btnRegistrar = document.getElementById('btnRegistrar')

//Evento para el despliegue del número de carnets
listarCarnets.addEventListener('change', (event) => {
    let numCarnet = event.target.value
    let contenedorCarnets = document.getElementById('contenedor-carnets-dinamicos')
    let contenedorPrecios = document.getElementById('contenedor-precios')

    fetch('/selectCarnetCtrl', {
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
            contenedorPrecios.innerHTML = datos.htmlMontosTotales
        })
        .catch(function (err) {
            console.log(err)
        })
})


//Evento para el registro


