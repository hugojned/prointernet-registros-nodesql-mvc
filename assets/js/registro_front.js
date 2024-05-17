
fetch('/rt_registro_select_carnet', {
    method: 'POST',
    headers: { 
        "Content-Type": "application/json",
    },
    body: JSON.stringify({numCarnet,evento})
})
.then((response) => response.json())
.then((response) => {
    var datos = response.datos
    contenedorCarnets.innerHTML = datos.htmlCarnets
    contenedorMontosTotales.innerHTML = datos.htmlMontosTotales
})
.catch(function(err){
    console.log(err)
})