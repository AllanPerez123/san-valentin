// Seleccionar elementos del DOM
const titulo = document.getElementById('titulo');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const imagen = document.getElementById('miImagen');
const botonesContainer = document.getElementById('botonesContainer');
const textoContainer = document.getElementById('textoContainer');

// Guardar la ruta de la imagen original
const imagenOriginal = imagen.src;

// Crear un párrafo para mostrar el mensaje
const mensaje = document.createElement('p');
mensaje.textContent = "Eres mi princesa de ojitos bonitos";
mensaje.style.fontSize = "1.5rem";
mensaje.style.color = "#333";
mensaje.style.textAlign = "center";
mensaje.style.marginTop = "20px";

// Función para el botón 1 (cambiar la página)
boton1.addEventListener('click', () => {
    // Cambiar el título
    titulo.textContent = 'Te amoooo';

    // Cambiar la imagen
    imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpaAJ5V1jR4eQ2LeDbqB35D350IUm4KOzaqMoGBbJMk7no-cm5TJ3oS3bpiqUBJQQiC0&usqp=CAU'; // Cambia esta ruta por la de tu nueva imagen

    // Ocultar los botones
    botonesContainer.style.display = 'none';

    // Ocultar el contenedor de texto
    textoContainer.style.display = 'none';

    // Agregar el mensaje en lugar del cuadro de texto
    document.body.appendChild(mensaje);
});

// Función para el botón 2 (cambia de lugar y la imagen temporalmente)
boton2.addEventListener('mouseover', () => {
    // Cambiar la imagen a una nueva
    imagen.src = 'https://i.pinimg.com/474x/ba/61/30/ba6130087d8edee38e11743125ee2a9d.jpg'; // Cambia esta ruta por la de tu segunda imagen

    // Restaurar la imagen original después de 3 segundos
    setTimeout(() => {
        imagen.src = imagenOriginal;
    }, 3000); // 3000 milisegundos = 3 segundos

    // Cambiar la posición del botón 2
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Generar coordenadas aleatorias dentro de la pantalla
    const randomX = Math.random() * (windowWidth - boton2.offsetWidth);
    const randomY = Math.random() * (windowHeight - boton2.offsetHeight);

    // Aplicar las nuevas coordenadas al botón 2
    boton2.style.position = 'absolute';
    boton2.style.left = `${randomX}px`;
    boton2.style.top = `${randomY}px`;
});
