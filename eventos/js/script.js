//1 - add eventos

const btn = document.querySelector("#my-click");

btn.addEventListener("click", function(){
    console.log("Você Clicou!")
})

// removento evento

const btn2 = document.querySelector("#btn");

function click(){
    console.log("Com Evento");
}

btn2.addEventListener("click", click)


// ---------------------------------------------------------------
const btn3 = document.querySelector("#remover");


btn3.addEventListener("click", ()=> {
    console.log("Removeu evento")
    btn2.removeEventListener("click", click)
})


// argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (evento)=>{
    console.log(evento);
    console.log(evento.target);
    console.log(evento.offsetX);
    console.log(evento.pointerType);
});

// propagação

const btnPropa = document.querySelector(".propagacao-btn");
console.log(btnPropa)

const propagacao = document.querySelector("#propagacao");

btnPropa.addEventListener("click",()=>{
    console.log("teste");
} );

propagacao.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("test2");
});


// eventos de tecla

document.addEventListener("keyup", (e)=>{
    
    console.log(`Apetou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e)=>{
   
    console.log(`pressionou a tecla ${e.key}`);
});


// eventos do mause

const mouse = document.querySelector("#click-mouse");

mouse.addEventListener("mousedown", ()=>{
    console.log("Clicou no mause")
});

mouse.addEventListener("mouseup", ()=>{
    console.log("soltou o click");
});

mouse.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

const input = document.querySelector("#my_input");

input.addEventListener("focus", (a)=>{
    console.log("entrou no input");
});

input.addEventListener("blur", (a)=>{
    console.log("saiu no input");
});

