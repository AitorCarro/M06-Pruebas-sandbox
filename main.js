let contador=0;

function mostrarMensaje(){
let usuario = document.getElementById("usuario").value;
let respuesta;

contador++;
respuesta = "Hola mon!: " + usuario;


    alert(respuesta);
document.getElementById("contador").innerHTML = "Número de veces que nos ha saludado: " + contador;
}