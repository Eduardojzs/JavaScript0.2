console.log(document.body);

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)


const list = document.getElementsByTagName("li");

console.log(list);

const tilte = document.getElementById("title");

console.log(title);

const product = document.getElementsByClassName("produto");

console.log(product);

// mais usado hoje em dia

const produto = document.querySelectorAll(".produto");

console.log(produto);

// seliconar so 1

const main = document.querySelector("#main-container");

console.log(main);

// insertBefore

const p = document.createElement("p");
