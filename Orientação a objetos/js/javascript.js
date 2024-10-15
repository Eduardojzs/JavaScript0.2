// Métodos

const animal = {
    name: "jhow",
    miar: function(){
        console.log(" Miau Miau");
    },
};

console.log(animal.name);

animal.miar();


const pessoa = {
   nome: "Dudu",

   

   getnome: function(){
        return this.nome
   },

   setnome: function(novonome){
        this.nome = novonome;
   }

};


console.log(pessoa.getnome());

pessoa.setnome("Ryan");

console.log(pessoa.getnome());


const idades = {
    idade: 25,

    getidade: function(){
        return this.idade
    },

    setidades: function(novaidade){
        this.idade = novaidade;
    }
};

console.log(idades.getidade());

idades.setidades(27);

console.log(idades.getidade());


function crearcachorro(nome, raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
};


const jhow = crearcachorro ("jhow", "Pinch");

console.log(jhow);

//

function Novocachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}


const jack = new Novocachorro("Jack", "Viralata");

console.log(jack)

//

class NewDogs{
    constructor(name, raca){
        this.name = name
        this.raca = raca
    }
}

const auau = new NewDogs("Pretinho", "Viralata");

console.log(auau)

class DogsLoucos{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const pretinho = new DogsLoucos("Pretinho", "Viralata");

console.log(pretinho);