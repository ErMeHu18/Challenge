// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function Agregar_Amigos() {
    amigos.push(document.getElementById('amigo').value);
}

function Limpiar_input() {
    document.getElementById('amigo').value = "";
}

function agregarAmigo() {
    if (document.getElementById('amigo').value == "") {
        alert("Por favor, inserte un nombre.")
    }
    else {
        Agregar_Amigos();
        Limpiar_input();
        Recorrer_Array();
    }
}

function Recorrer_Array() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function elegir_Amigo_Aleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
}

function sortearAmigo() {

    if (amigos.length == 0) {
        alert("No hay amigos")
    }
    else {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "";

        let li_re = document.createElement("li");
        li_re.textContent = elegir_Amigo_Aleatorio() ;
        resultado.appendChild(li_re);
    }
}




