const autos= []
const auto = {
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
 function cargarauto (){
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
 }
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
const titulo= document.getElementById("dejacontacto")
const h2= document.getElementsByClassName("textosh2")
const h1= document.getElementsByTagName("h1")

//iinner permite generar un codigo html desde js 
//inner.text escribe texto
//inner.html escribe codigo html
function agregarfilatabla () {
    const tabla = document.getElementById ("tabla1")
    let fila = `<tr class="tabla">
    <td class="celda">Modelo</td>
    <td class="celda">Año</td>
    <td class="celda">Precio</td>
    <td class="celda">km</td>
    <td class="celda"><button>Financiamiento </button><button>Ver Producto</button> </td>

</tr>`
tabla.innerHTML += fila

}
function nuevoauto (){
    let modelo = prompt ( "ingrese modelo"),
    let año= parseFloat (prompt("ingrese año del vehiculo")),
    let precio= parseFloat (prompt ("Ingrese precio")),
    let kilometros= parsefloat (prompt("ingrese kilometros")),
    autos.push(new autos(modelo, año, precio, kilometros  ))
 }

//document.createElement ("") para crear elemento html
