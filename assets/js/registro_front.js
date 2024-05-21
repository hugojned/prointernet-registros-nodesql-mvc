let listNumCarnets = document.getElementById('listNumCarnets')
let btnRegistrar = document.getElementById('btnRegistrar')

//Evento para el despliegue del número de carnets
listNumCarnets.addEventListener('change', function (event) {
    let numCarnetValor = parseInt(event.target.value)
    console.log(numCarnetValor)
    let contenedorCarnetsDinamicos = document.getElementById('contenedorCarnetsDinamicos')
    let contenedorPrecios = document.getElementById('contenedorPrecios')

    fetch('/rtSelectCarnet', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ numCarnetValor })
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

btnRegistrar.addEventListener('click', function(event){
    event.preventDefault();
    // Recopilación de datos
    let formCliente = new FormData(document.getElementById('formCliente'))
    let formsCarnets = document.querySelectorAll('.formsCarnets')
    let correo = document.getElementById('txtCorreoCliente').value
    let idEvento = btnRegistrar.dataset[0]
    let registro = {}
    
    for(key of formCliente.keys()){
        registro[key] = formCliente.get(key)
    }

    let carnetsArray=[]

    for(form of formsCarnets.values()){
        let forItem = new FormData(form)
        let jsonForm = {}

        for(keyForm of forItem.keys()){
            jsonForm[keyForm] = forItem.get(keyForm)   
        }
        carnetsArray.push(jsonForm)
    }
    console.log(registro, carnetsArray)
    console.log(correo)

    //Envío de datos
    fetch('/rtEnviarRegistro', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({idEvento, registro, carnetsArray})
    })
    .then((response) => response.json())
    .then((response) => {console.log(response)})
    
    //Envío del correo
    fetch('/rtEnviarCorreo',{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({correo})
    })
    .then((response) => response.json())
    .then((response)=>{console.log(response);})
    .catch(function(err){
        console.log(err)
    })

    //Redireccionamiento al resumen
    window.location.pathname = '/resumen-final'
})


