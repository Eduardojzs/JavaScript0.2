// Arrays

const lista = [1,2,3,4,5];

console.log(lista);

const itens = ["Eduardo", 25, 166.123, array = []];

console.log(itens)

// propriedades

const lista2 = [5, 3, 2];

console.log(lista2.length);

// mais sobre Arrays

console.log(lista2[0]);


// Concatenado números
const listaDeNumeros = [6, 7, 8, 9]

const allnumeros = lista.concat(listaDeNumeros)

console.log(allnumeros)

// objetos

const all = {
    name: "Eduardo",
    
    age: 25,

    job: "Programdor",


};

console.log(all)
// add altura
all.altura = 1.77

console.log(all)

// remover
delete all.altura

console.log(all)


// push and pop

const list = ["a", "b",  "c"];


// push add um item no final da lista 
list.push("d");

console.log(list);


// pop remove do final da list
list.pop();

console.log(list);

itensRemovidos = list.pop();

console.log(itensRemovidos);

console.log(list);


// Shift e unshift

//shift remove o primeiro item da lista

//unshift add no primeiro item da lista

const letras = ["a", "b", "c"];

itemremovido = letras.shift();

console.log(itemremovido);

letras.unshift("a");

console.log(letras)


// foreach

const nums = [1, 2, 3, 4];

nums.forEach((numeros)=>{
    console.log(`Números: ${numeros}`);
});


