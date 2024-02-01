let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", ` numero correcto en ${intentos} ${(intentos === 1) ? "ves" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto el numero
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "el numero es menor");
        } else {
            asignarTextoElemento("p", "el numero es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    // si ya sorteamos los numeros
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros");
    } else {
        // si el numero generado esta incluido en la lista

        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }

    }
   

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje intervalo de numero
    //generar numero aleatorio
    //iniciar numero de intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();