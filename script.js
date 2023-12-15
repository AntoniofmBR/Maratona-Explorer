
const elementoResposta = document.querySelector("#resposta"); //! Vai procurar em todo o HTML alguém com a id Resposta
const inputPergunta = document.querySelector("#inputPergunta");//! Vai procurar em todo o HTML alguém com a id inputPergunta
const buttonPerguntar = document.querySelector("#buttonPerguntar");
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

//! Clicar em fazer pergunta
function fazerPergunta() {

if (inputPergunta.value == "") {
    alert("Por favor digite a sua pergunta")
    return //? toda função que tem um return ela para de executar a função imediatamente
}

buttonPerguntar.setAttribute('disabled', true) //? vai aplicar a tag disable no botão

const pergunta = "<div>" + inputPergunta.value + "</div>" //? vai transformar a pergunta em um HTML


//! Gerar um número aleatório
const totalRespostas = respostas.length
const nAleatorio = Math.floor(Math.random() * totalRespostas) 

//? Math.ramdom gera um número aleatório de 0 a 1 (nunca chega ao numero 1 apenas até 0.99) e Math.floor arredonda esse número ao piso

//? Como queremos gerar um número de 0 a 18 o Math.random vai gerar um numero que multiplcado por 19 será arredondado até no máximo 18 que é o esperado    

console.log(respostas[nAleatorio])
elementoResposta.innerHTML = pergunta + respostas[nAleatorio]
elementoResposta.style.opacity = 1;

//! sumir depois de 3 segundos
setTimeout(function() {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
}, 3000)


}


