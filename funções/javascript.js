// função
function MinhaFunção(){
    console.log("Hellow World");
}

MinhaFunção();

function funcaoparaimprimir(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoparaimprimir("imprimendo alguma coisa.")
funcaoparaimprimir("Olá Mundo!")


//return

const a = 20;
const b = 50;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

function ParorImpar(n){
    if(n % 2 === 0){
        console.log("par");
        return;
    }
    console.log("Impar");
}


ParorImpar(7);


function saudacao(name){
    if(!name){
        return console.log("Porfavor Digite um nome");
    }
    console.log(`Olá ${name}`);
}


saudacao();

saudacao("Eduardo");


function greet(nome, greeet = "olá"){
    return `${nome} ${greeet}`;
}


console.log(greet("Eduardo"));

console.log(greet("Show", "De bola"));



function Menorquedez(x, y){
    if(x < 10){
        console.log("End")
    }else{
        const resultado = (x - y);
        console.log(resultado);

        Menorquedez(resultado, y);
     
    }
    
}

Menorquedez(300, 7);