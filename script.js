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
    afirmacao:"Atividades físicas ao ar livre em áreas poluídas podem aumentar o risco de problemas de saúde, especialmente em crianças e idosos"

       ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}