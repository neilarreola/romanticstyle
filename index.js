const frases = [
  "Por que le das que no :(",
  "El verde se ve mejor, ahí nomas lo dejo...",
  "Esta compu se autodestruirá en 10,9,8...",
  "Mi cora </3",
  "A veces la vida nos es como queremos ",
  "Ahhhhhhhhhhhhhhh",
  "Esto va a explotar!!",
  "No me duele, me quema, me lastimaaa :(",
  "Dios ven por mí",
  "Cada vez que le das que no, dejas sin hogar a un dylan.",
  "Ya no es graciosoooo",
  "Se me acabaron las frases, dale que sí!"
]
let n = 0;
// Obtener el botón por su ID
const botonNo = document.getElementById('miBotonNo');
const botonYes = document.getElementById('miBotonYes');
// Añadir el evento de clic
botonNo.addEventListener('click', function() {
  
  // Obtener el tamaño actual del botón
    const ancho = botonNo.offsetWidth;  // Obtiene el ancho del botón
    const alto = botonNo.offsetHeight;  // Obtiene la altura del botón
    console.log(ancho);
    console.log(alto);
    botonNo.style.width = (ancho + 70) + 'px';
    botonNo.style.height = (alto + 30) + 'px';
    botonNo.innerText = frases[n];
    png.style.display = "none";
    gif.style.display = "block";

    if ((n+1) == frases.length) {
      n = frases.length - 1;
    } else {
      n = n+1;
    }
});

botonYes.addEventListener('click', function() {
   // Mostrar el contenedor del video
   videoContainer.style.display = 'block';
   // Reproducir el video
   miVideo.play();


  //OCULTAR TODO
  botonNo.style.display = "none";
  botonYes.style.display = "none";
  document.getElementById("img").style.display = "none";
  document.getElementById("question").style.display = "none";

});



