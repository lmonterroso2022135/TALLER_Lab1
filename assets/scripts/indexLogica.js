let contenedorAbierto = false;
const contenedor = document.getElementById('contenedor1');

function mostrarContenedor() {
    contenedorAbierto = !contenedorAbierto;

    if (contenedorAbierto) {

        contenedor.style.height = '500px';
    } else {
        
        contenedor.style.height = '0';
    }
}