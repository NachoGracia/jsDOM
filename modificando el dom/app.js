//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const unDiv = document.createElement("div"); // crearlo

document.body.appendChild(unDiv); // pintarlo

//ahora con template:

const otroDiv = `
<div></div>
`;

const otroDivPintado = (document.body.innerHTML += otroDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

//crear div, crear párrafo, contenido y pintarlo

const divParrafo = document.createElement("div");
const divParrafoPintado = document.body.appendChild(divParrafo); // pintado

const unParrafo = document.createElement("p"); // crea párrafo
unParrafo.textContent = "Un párrafo";
divParrafo.appendChild(unParrafo); // pinta dentro del div creado

//con template. Crear Div, crear párrafo, pintar y contenido

const otroDivParrafo = "<div><p>Otro párrafo con template</p></div>";

document.body.innerHTML += otroDivParrafo;

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

// con create:

// primero un bucle de 6 vueltas
for (let i = 0; i < 6; i++) {
  const divSeisP = document.createElement("p");
  divSeisP.textContent = `Este es el párrafo nº ${i}`;
  document.body.appendChild(divSeisP);
}

//con template:

//crear div:

const otroDivSeisP = document.createElement("div");

for (let i = 0; i < 6; i++) {
  otroDivSeisP.innerHTML += `<p>Este es OTRO el párrafo nº ${i + 1}</p>`;
}

document.body.appendChild(otroDivSeisP);
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
