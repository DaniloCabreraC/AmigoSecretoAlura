// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigo = [];

function agregarAmigo(){
    let ingresarAmigo = document.getElementById("amigo").value.trim();
    if(ingresarAmigo != ""){
        nombreAmigo.push(ingresarAmigo);

        console.log(nombreAmigo);

        let listaNombre = document.createElement("li");
        listaNombre.textContent = ingresarAmigo;
        document.getElementById("listaAmigos").appendChild(listaNombre);

        document.getElementById("amigo").value = ""
        
    }else{
        alert('Por favor, inserte un nombre');
    }

}

function sortearAmigo(){

    document.getElementById("listaAmigos").innerHTML = ""
    let aleatorio = Math.floor(Math.random()*nombreAmigo.length);
    console.log(`${nombreAmigo[aleatorio]}`);

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${nombreAmigo[aleatorio]}`;
}