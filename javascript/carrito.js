
function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
    carrito.forEach(vehiculo => {
        let fila = `<tr class="tabla3">
        <td class="celda1">Modelo : ${vehiculo.modelo}</td>
        <td class="celda1">Año :  ${vehiculo.año}</td>
        <td class="celda1" class="valorvehiculo">Precio: (${vehiculo.precio})</td>
        <td class="celda1">Km : ${vehiculo.km}</td>
        </tr></td>`
        
        
        tabla.innerHTML += fila
    })
}
recuperoCarrito ()