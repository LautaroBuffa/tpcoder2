function debounce(callback, wait) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }

class Vehiculo {
    constructor(modelo, año, precio, km) {
        this.modelo = modelo
        this.año = año
        this.precio = precio
        this.km = km
    }
}

const vehiculos = []
generadorautomatico()
dibujarTabla()

const inputbuscarvh = document.querySelector("#buscar")
const filtro = document.getElementById("filtro")
const btnAgregar = document.querySelector("#btnAgregar")

function generadorautomatico() {
    vehiculos.push(new Vehiculo("Celta", 2020, 2000000, 220000))
    vehiculos.push(new Vehiculo("Audi A4", 2020, 2000000, 220000))
    vehiculos.push(new Vehiculo("BMW m4", 2020, 2000000, 220000))
    vehiculos.push(new Vehiculo("Gol trend", 2020, 2000000, 220000))
}

function agregarAuto(modelo, año, precio, km) {
    vehiculos.push(new Vehiculo(modelo, año, precio, km))
    dibujarTabla()
}
// funcion para subir un auto a la pagina


function dibujarTabla(filter) {
    const tabla = document.getElementById("tabla1")
    tabla.innerHTML = ""

    let vehiculosAMostrar = vehiculos

    if (filter) {
        const vehiculosFiltrados = vehiculos.filter(vehiculo => vehiculo.modelo.toUpperCase().includes(filter.toUpperCase()))

        if (vehiculosFiltrados.length) {
            vehiculosAMostrar = vehiculosFiltrados
            alert('se encontro algun vehiculo')
        } else {
            alert('No se encontraron vehiculos con ' + filter)
        }
    }

    for (let i = 0; i < vehiculosAMostrar.length; i++) {
        let modelo = vehiculosAMostrar[i].modelo;
        let año = vehiculosAMostrar[i].año;
        let precio = vehiculosAMostrar[i].precio;
        let km = vehiculosAMostrar[i].km;

        let fila = `<tr class="tabla">
            <td class="celda">Modelo : ${modelo}</td>
            <td class="celda">Año :  ${año}</td>
            <td class="celda" class="valorvehiculo">Precio: (${precio})</td>
            <td class="celda">Km : ${km}</td>
            <td class="celda">
                <button class="financiar" data-precio="${precio}">Financiamiento </button>
                <button class="carrito" data-modelo="${modelo}" data-año="${año}" data-precio="${precio}" data-km="${km}">Agregar al Carrito</button>
            </td>
        
        </tr>`
        tabla.innerHTML += fila
    }
}


// funcion boton de agregar
function Agregar() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Estas Seguro??',
        text: "No vas a poder revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Cargar Producto!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Producto Cargado!',
                'Tu producto fue Agregado al Stock.',
                'success',
                (() => {
                    const modelo = document.getElementById("modelo").value
                    const km = document.getElementById("km").value
                    const año = document.getElementById("año").value
                    const precio = document.getElementById("precio").value

                    agregarAuto(modelo, año, precio, km)
                })()
            )
        } else if (

            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelar',
                'Tu producto no se ha Agregado al stock',
                'error'
            )
        }
    })
}


btnAgregar.addEventListener("click", Agregar)
inputbuscarvh.addEventListener('input', debounce(filtrarproducto, 1000))

function filtrarproducto() {

    let inputnombre = inputbuscarvh.value.trim()

    if (inputnombre) {

        dibujarTabla(inputnombre)

        if (resultado.length == 0) {
            console.clear()
            alert("No se encontro este producto" + inputnombre)
        } else { 
            alert("se encontro el auto ")
        }
    } else {
        dibujarTabla()
    }
}

//Función para guardar en el carrito
const btncarrito = document.getElementsByClassName("carrito");
for (let i = 0; i < btncarrito.length; i++) {
    btncarrito[i].addEventListener("click", agregarAlCarrito)
}

let carrito = []


function agregarAlCarrito(event) {
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    
    const modelo= event.target.getAttribute("data-modelo")
    const año= event.target.getAttribute("data-año")
    const precio= event.target.getAttribute("data-precio")
    const km= event.target.getAttribute("data-km")
    class Auto {
        constructor(modelo, año, precio, km) {
            this.modelo = modelo
            this.año = año
            this.precio = precio
            this.km = km
        }
    }
    carrito.push( new Auto (modelo, año, precio, km))
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




//Funcion marcas


const marcas = ["Volkswagen", "Fiat", "BMW", "Ford", "Chevrolet", "Audi", "jeep", "Peugeot", "toyota"]

function recorrerArray() {
    for (let i = 0; i < marcas.length; i++) {
        console.log(marcas[i])
    }
}

function agregarmarca() {
    let nuevamarca = prompt("ingresa nueva marca")
    marcas.push(nuevamarca)
    console.table(marcas)
} 

//funcion fetch (no la pude hacer funcionar)
/*const contenedor = document.getElementsByClassName("contenedor")
const url= "javascript/autos.json"
let autos= []
let contenidohtml= ""
const mostrarcard = (contenido)=>{
    const {foto, titulo, texto} = contenido
    return  `  <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
              <p class="card-text">${texto}</p>
          </div>`
} 
const mostrarerror= ()=>{
    return  `  <div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="no se pudo cargar">
    <div class="card-body">
      <h5 class="card-title">ningun auto cargado</h5>
  </div>`
} 

const cargarcontenido=async () =>{
    fetch(url)
    .then(response=> response.json())
    .then(data=> autos = data)
    .then(autos=autos.forEach(vehiculo=> contenidohtml += mostrarcard(vehiculo)))
    .catch(error=> {
        console.error ("se ha producido un error", error)
    contenidohtml+= mostrarerror()    })
    .finally(()=> contenedor.innerHTML=contenidohtml)
}

/*const cargarjson = async ()=>{
    try{
    const response = await fetch (url)
    const data= await response.json()
    data=autos
    autos.foreach(vehiculo=>
        contenidohtml+= mostrarcard(vehiculo)
    );
}
catch (error){
contenidohtml.innerHTML = mostrarerror()
}
finally{
contenedor.innerHTML = contenidohtml
}
}
cargarjson()*/


// Funcion financiar

function financiar(event) {
const precio= event.target.getAttribute("data-precio")
 let entrega = parseInt (prompt ("Cuanto dinero entrega?"))
 let cuotas = parseInt (prompt ("Ingrese cantidad de cuotas en las que desea pagar el saldo del vehiculo"))
 let valorcuotas= ((precio-entrega)/cuotas)*2
 alert ("El valor de la cuota es $"+ valorcuotas)
}

const financiamiento = document.getElementsByClassName("financiar");
for (let i = 0; i < financiamiento.length; i++) {
    financiamiento[i].addEventListener("click", financiar)
}