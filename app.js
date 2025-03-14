// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];


function agregarAmigo() {
    let nombreDeUsuario = document.getElementById("amigo").value; //obtiene el valor ingresado como string 
    if (nombreDeUsuario == "") {
        alert('Por favor, inserte un nombre:');
    } else {
        amigos.push(nombreDeUsuario); //agrega el nombre a la lista de amigos
        console.log(amigos); //muestra la lista actualizada en la consola
        document.getElementById("amigo").value= ""; //limpia la entreda
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //limpia la lista
    for (let i = 0; i < amigos.length; i++) { //blucle
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>"; // Crea un nuevo elemento <li> para cada amigo
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { //ver sin hay amigos disponibles
        alert('No hay amigos disponibles para sortear.');
        return; // Sale de la función si no hay amigos
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //generar índice aleatorio del arreglo
    let amigoSorteado = amigos[indiceAleatorio]; //obtener el nombre que se sorteo (el índice)
    let resultado = document.getElementById("resultado"); //ver el resultado
    resultado.innerHTML = `El amigo sorteado es: "${amigoSorteado}"`; // Actualiza el contenido del elemento de resultado
}