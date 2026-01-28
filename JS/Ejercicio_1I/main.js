const enlaces = document.getElementsByTagName("a");
console.log("Número de enlaces es: ", enlaces.length);

const penultimoEnlace = enlaces[enlaces.length - 2].href;
console.log(penultimoEnlace);

const tercerParrafo = document.getElementById("third-paragraph");
const numeroEnlacesTercerParrafo =
  tercerParrafo.getElementsByTagName("a").length;

console.log(numeroEnlacesTercerParrafo);

const parrafoResultados = document.createElement("p");
const contenidoParrafoResultados = document.createTextNode(
  `El número de enlaces en la página es: ${enlaces.length} , el link que apunta al penúltimo enlace es ${penultimoEnlace} y el número de enlaces del tercer párrafo es ${numeroEnlacesTercerParrafo}`,
);

parrafoResultados.appendChild(contenidoParrafoResultados);
document.body.appendChild(parrafoResultados);
