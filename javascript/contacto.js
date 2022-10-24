// Funcion para Guardar datos

const guardarbtn = document.getElementById("btnEnviar")
guardarbtn.addEventListener("click", guardadatos)  
    
const inputnombre = document.getElementById("nombre")
const inputapellido = document.getElementById("apellido")
const inputnumero = document.getElementById("numero")
const inputmail = document.getElementById("mail1")

function guardadatos() {

    localStorage.setItem("nombre", inputnombre.value)
    localStorage.setItem("apellido", inputapellido.value)
    localStorage.setItem("numero", inputnumero.value)
    localStorage.setItem("mail", inputmail.value)
}

function recuperardatos() {
    inputnombre.value = localStorage.getItem("nombre")
    inputapellido.value = localStorage.getItem("apellido")
    inputnumero.value = localStorage.getItem("numero")
    inputmail.value = localStorage.getItem("mail")
}
const btnrecupero = document.querySelector ("#recupero")
btnrecupero.addEventListener ("click",recuperardatos)