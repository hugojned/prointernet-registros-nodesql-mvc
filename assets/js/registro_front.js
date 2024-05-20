let listNumCarnets = document.getElementById('listNumCarnets')
let btnRegistrar = document.getElementById('btnRegistrar')

//Evento para el despliegue del número de carnets
listNumCarnets.addEventListener('change', function (event) {
    let numCarnet = event.target.value
    let contenedorCarnetsDinamicos = document.getElementById('contenedorCarnetsDinamicos')
    let contenedorPrecios = document.getElementById('contenedorPrecios')

    fetch('/rtSelectCarnet', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ numCarnet })
    })
    .then((response) => response.json())
    .then((response) => {
        let datos = response.datos
        contenedorCarnetsDinamicos.innerHTML = datos.htmlCarnets
        contenedorPrecios.innerHTML = datos.htmlMontosTotales
    })
    .catch(function (err) {
        console.log(err)
    })
})


//Evento para el registro


