// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Obtener el elemento de la lista visual
let listaVisual = document.getElementById('listaAmigos');

// Función para agregar amigos a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();
    
    // Verificar si el nombre está vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }
    
    // Verificar si el nombre ya está en la lista
    if (listaDeAmigos.find(elemento => elemento.toLowerCase() == nombre.toLowerCase())) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    listaDeAmigos.push(nombre);
    
    // Actualizar la lista visual
    actualizarLista()
    
    // Limpiar el input
    inputAmigo.value = '';
}

// Función para actualizar la lista visual
function actualizarLista() {
    limpiarLista()
    
    listaDeAmigos.forEach(nombre => {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre;    
        listaVisual.appendChild(nuevoAmigo);
    });
} 

// Función para limpiar la lista visual
function limpiarLista() {
    listaVisual.innerHTML = '';
}   

// Función para sortear amigos secretos
function sortearAmigo() {
    // Verificar si hay al menos 2 personas en la lista
    if (listaDeAmigos.length < 2) {
        alert('Se necesitan al menos 2 personas para realizar el sorteo');
        return;
    }

    limpiarLista()
    
    //Genere un indice aleatoria
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[indiceAleatorio];
    let resultado = `El amigo secreto sorteado es: ${amigoSecreto}`;
    
    // Mostrar resultado
    let listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = '';

    // Crear un elemento li para el resultado
    let elementoResultado = document.createElement('li');
    elementoResultado.textContent = resultado;
    
    // Agregar el elemento li al ul
    listaResultados.appendChild(elementoResultado);
}