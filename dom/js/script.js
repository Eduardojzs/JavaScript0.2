
// elemento por Tag
const list = document.getElementsByTagName("li");
console.log(list)

//Elemento por id 

const title = document.getElementById("title");

console.log(title);

const produto = document.getElementsByClassName("produto");

console.log(produto);


const produto2 = document.querySelectorAll(".produto");

console.log(produto2);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);


//criando elemento
const p = document.createElement("p");
console.log(p);


// colocar um novo elemento
const header = title.parentElement

console.log(header);

header.insertBefore(p, title);


// - appendChild
const navlink = document.querySelector("nav ul");

// usamos para cria um novo elemento
const li = document.createElement("li");

navlink.appendChild(li);


// Troca elementos
const h2 = document.createElement("h2");

h2.textContent = "Meu novo Título"

header.replaceChild(h2, title);

// criando texto

const TextCreat = document.createTextNode("Criando um texto!");

console.log(TextCreat);

const h3 = document.createElement("h3");

h3.appendChild(TextCreat);

mainContainer.appendChild(h3);

// trabalhando com atributos

const frist = navlink.querySelector("a");

frist.setAttribute("href", "https://www.instagram.com/eduardojzs22/");

frist.setAttribute("target", "_blank");

