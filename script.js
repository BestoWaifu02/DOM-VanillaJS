//Selector de tags en DOM
/* 
1-El query selector toma la primer tag del body
2-El query selector sirve para TAGS, clases (.ejClase) y IDs (#ejID)
3-El query selector ALl sirve para todas las tags o clases
*/
console.log(document.querySelector("h3"));
console.log(document.querySelector(".class-h3"));
console.log(document.querySelector("#parrafo"));

console.log(document.querySelectorAll(".class-h3"));

console.log(document.getElementById("parrafo"));

//Los elementos para poder editarse se deben guardar el variables

const parrafo = document.getElementById("Parrafo");
//con el textContent podemos solo cambiar el txt del element
parrafo.textContent = "texto desde JS";
//con INNERHTML podemos agregar tags
parrafo.innerHTML = "<strong>Hola </strong>";
//classList nos permite agregar clases (pueden ser varias)
parrafo.classList.add("class-h3", "class-ej");

/* SECCION CREAR ELEMENTOS */

const lista = document.getElementById("Lista");
console.log(lista);

const arrayElement = ["Tacos", "^Pizza", "Burger"];

arrayElement.forEach((index) => {
  console.log(index);
  const li = document.createElement("li");
  li.textContent = index;
  lista.appendChild(li);
});

arrayElement.forEach((index) => {
  //A liste se le van juntando los elementos
  lista.innerHTML += `<li>${index}</li>`;
});

/* SECCION FRAGMENT */
const arrayElements2 = ["item1", "item2", "item3"];

//Formas de crear un fragment
const Fragment = document.createDocumentFragment();
const Fragment2 = new DocumentFragment();

arrayElements2.forEach((index) => {
  const li = document.createElement("li");
  li.textContent = index;

  const childNode = Fragment.firstChild();

  Fragment.insertBefore(li, childNode);
  // Fragment.appendChild(li);
});
lista.appendChild(Fragment);
