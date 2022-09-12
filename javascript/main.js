class Vehiculo {
    constructor(modelo,año,precio,km){
    this.modelo= modelo
    this.año=año
    this.precio=precio
    this.km=km
    }
}
const vehiculos = []

function crearAuto(){
    

let modelo = document.getElementById ("modelo").value
let km = document.getElementById ("km").value
let año = document.getElementById ("año").value
let precio = document.getElementById ("precio").value

let auto = new Vehiculo (modelo,año,precio,km)

agregarAuto(auto)
}

function agregarAuto(auto){
    vehiculos.push(auto)

}// funcion para subir un auto a la pagina


function agregarfilatabla () {
    const tabla = document.getElementById ("tabla1")
    for (let i = 0; i < vehiculos.length; i++) {
        
        let modelo = vehiculos[i].modelo;
        let año = vehiculos[i].año;
        let precio = vehiculos[i].precio;
        let km = vehiculos[i].km;

        let fila = `<tr class="tabla">
        <td class="celda">modelo : (${modelo})</td>
        <td class="celda">Año :  (${año})</td>
        <td class="celda" class="valorvehiculo">Precio: (${precio})</td>
        <td class="celda">km : (${km})</td>
        <td class="celda"><button class="financiar">Financiamiento </button><button>Ver Producto</button> </td>
    
    </tr>`
    tabla.innerHTML += fila
        
        
    }
   

}

const btnAgregar= document.querySelector ("#btnAgregar")

function enviar (){
    alert ("Producto agregado al stock.")
}
btnAgregar.addEventListener("click", ()=>{
    enviar ()
})
btnAgregar.addEventListener ("click", ()=>{
    agregarfilatabla ()
})
btnAgregar.addEventListener ("click", ()=>{
    crearAuto ()
})





// Codigo para probar en la consola

/*const auto = {
    modelo: "AUDI A4",
   año: 2022,
    precio: 5000000,
    kilometros: 0,
 }
const auto1 = {
    modelo: "AUDI A4",
   año: 2022,
    precio: 5000000,
    kilometros: 0,
 }
 const auto2 = {
    modelo: "gol trend",
   año: 2014,
    precio: 1500000,
    kilometros: 150000,
 }
 const auto3 = {
    modelo: "ford ka",
   año: 2010,
    precio: 1000000,
    kilometros: 200000,
 }


//funcion calcular credito

 function calcularCredito (valorauto, cuotas){
    let valorCuota =  (valorauto/cuotas)*0.5
    return alert( "el  valor de la cuota es " + valorCuota)
 }
 
 function calculocredito (){
    let vehiculo = prompt ("ingrese el vehiculo")
    if (vehiculo == auto1.modelo){
        alert ("Tus opciones de cuotas son, 12, 24 o 48")
        let cuotas = parseFloat (prompt("ingrese la cantidad de cuotas en la que desea abonar"))
        return alert ("El valor de tus cuotas es $ " + auto1.precio/cuotas*0.5)
}
    else if (vehiculo == auto2.modelo){
        alert ("Tus opciones de cuotas son, 6, 12 o 24")
        let cuotas = parseFloat (prompt("ingrese la cantidad de cuotas en la que desea abonar"))
        return alert ("El valor de tus cuotas es $ " + auto2.precio/cuotas*0.5)
}
else if (vehiculo == auto3.modelo){
      (alert ("Tus opciones de cuotas son, 3, 6 o 12"))
      let cuotas = parseFloat (prompt("ingrese la cantidad de cuotas en la que desea abonar"))
      return alert ("El valor de tus cuotas es $ " + auto3.precio/cuotas*0.5)
}
else {
    alert ("No tenemos este vehiculo")
}
 }
*/

 //funcion cargar autos a travez de prompt


/* function cargarauto (){
   let i = parseFloat( prompt("ingrese cuantos autos quiere subir a la app"))
   let n = 0
   while (n<i) {
const auto = {
    modelo: prompt ( "ingrese modelo"),
   año: parseFloat (prompt("ingrese año del vehiculo")),
    precio: parseFloat (prompt ("ingrese precio")),
    kilometros: parseFloat (prompt("ingrese kilometros")),
}
n++
alert ("Este es el vehiculos que ingresaste" +" " + auto.modelo +" "  + auto.año +" "  + auto.kilometros +"km"  + " " + auto.precio +"pesos" )
}
 }*/


 //Funcion marcas


 const marcas = ["Volkswagen","Fiat", "BMW", "Ford","Chevrolet", "Audi","jeep","Peugeot","toyota"]
function recorrerArray () {
    for (let i=0; i<marcas.length ;i++){
    console.log (marcas[i])
}
}
function agregarmarca (){
    let nuevamarca = prompt ("ingresa nueva marca")
    marcas.push (nuevamarca)
    console.table (marcas)
}


//  const inputs = document.querySelectorAll("input")
//inputs.forEach(input () =>{
    //alert (input.value)
 //   input.addEventListener("focus", input.classname = "focus-en-input")
  //  input.addEventListener("blur", input.classname = "")
//})

// Funcion financiar

/*const Financiamiento = document.getElementsByClassName ("financiar")
const valorVehiculo = document.getElementsByClassName ("valorvehiculo")

function financiar1 (){
 let precio = valorVehiculo
 let entrega = parsefloat (prompt ("Cuanto dinero entrega?"))
 let cuotas = parsefloat (prompt ("Ingrese cantidad de cuotas en las que desea pagar el saldo del vehiculo"))
 let valorcuotas= ((precio-entrega)/cuotas)*0.5
 alert ("El valor de la cuota es"+ valorcuotas)
}
Financiamiento.addEventListener ("click", ()=>{
    financiar1 ()
})*/