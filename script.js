const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPrincipal = document.querySelector (".caixa-perguntas");
const caixaPrincipal = document.querySelector (".caixa-alternativas");
const caixaPrincipal = document.querySelector (".caixa-resultado");
const caixaPrincipal = document.querySelector (".texto-resultado");

const perguntas = [
    {
     enunciado:"Qual o impacto da poluição do ar na saúde de praticantes de esportes ao ar livre?"
     alternativas:[
    }
    {
    texto:"A poluição pode aumentar o risco de doenças respiratórias e cardiovasculares",
    afirmacao:"A exposição prolongada à poluição do ar pode diminuir a capacidade pulmonar, afetando o desempenho esportivo"
    },
    {
    texto:"A poluição tem um efeito positivo na resistência física dos atletas",
    afirmacao:"Atividades físicas ao ar livre em áreas poluídas podem aumentar o risco"

    ]
    }
];

let atual =0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const altwenativa of perguntaAtual.alternativas){
        const botaoAlternativas = documento.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener('click', ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

    }

} 

function respostaSelecionada0(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}
mostraPergunta();
