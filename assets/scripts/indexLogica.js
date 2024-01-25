let contenedorAbierto = false;
var contador = 1;
const contenedor = document.getElementById('contenedor1');
var botonR = document.getElementById('botonR');
var botonL = document.getElementById('botonL');
var tarjeta1 = document.getElementById('tarjeta1');
var tarjeta2 = document.getElementById('tarjeta2');
var tarjeta3 = document.getElementById('tarjeta3');
var tarjeta4 = document.getElementById('tarjeta4');
var tarjeta5 = document.getElementById('tarjeta5');


function mostrarContenedor() {
    contenedorAbierto = !contenedorAbierto;

    if (contenedorAbierto) {
        contenedor.style.height = '500px';

        tarjeta1.style.display = 'block';

        botonR.disabled = false;
        contador =1;

        botonL.style.display ='block';
        botonR.style.display ='block';
    } else {
        contenedor.style.height = '0';
        tarjeta2.style.display = 'none';
        tarjeta3.style.display = 'none';
        tarjeta4.style.display = 'none';
        tarjeta5.style.display = 'none';
        botonL.disabled = false;


        botonL.style.display ='none';
        botonR.style.display ='none';
    }
}
function cambiarR(){  
    switch(contador){
        case 1:
            tarjeta1.style.display = 'none';
            tarjeta2.style.display = 'block';
            contador++;
            botonL.disabled = false;
            break;
        case 2:
            tarjeta2.style.display = 'none';
            tarjeta3.style.display = 'block';
            contador++;
            break;
        case 3:
            tarjeta3.style.display = 'none';
            tarjeta4.style.display = 'block';
            contador++;
            break;
        case 4:
            tarjeta4.style.display = 'none';
            tarjeta5.style.display = 'block';
            contador++;
            botonR.disabled = true;
            break;
    }
}
function cambiarL(){
    switch(contador){
        case 2:
            tarjeta2.style.display = 'none';
            tarjeta1.style.display = 'block';
            contador--;
            botonL.disabled = true;
            break;
        case 3:
            tarjeta3.style.display = 'none';
            tarjeta2.style.display = 'block';
            contador--;
            break;
        case 4:
            tarjeta4.style.display = 'none';
            tarjeta3.style.display = 'block';
            contador--;
            break;
        case 5:
            tarjeta5.style.display = 'none';
            tarjeta4.style.display = 'block';
            contador--;
            botonR.disabled = false;
            break;
    }
}
