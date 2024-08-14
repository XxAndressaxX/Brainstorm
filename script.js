const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você trabalha em uma empresa e, de repente, mudam sua função para um departamento totalmente novo, exigindo habilidades que você ainda não tem. Como você reage?",
        alternativas: [
            {
                texto: "Vejo como uma oportunidade e aceito o desafio",
                afirmacao: "Você vê mudanças inesperadas como oportunidades de crescimento e se adapta bem a novos desafios."
            },
            {
                texto: "Prefiro a estabilidade e me sinto desconfortável com a mudança",
                afirmacao: "Você prefere a estabilidade e sente desconforto ao lidar com mudanças inesperadas."
            }
        ]
    },
    {
        enunciado: "Com essa nova função, você começa a se perguntar se está realmente dando o seu melhor nas tarefas diárias. Como você avalia seu esforço?",
        alternativas: [
            {
                texto: "Sempre dou o meu melhor, mesmo nas pequenas coisas",
                afirmacao: "Você se esforça para dar o seu melhor em todas as responsabilidades diárias, independentemente do tamanho da tarefa."
            },
            {
                texto: "Faço apenas o necessário e não me questiono muito",
                afirmacao: "Você tende a fazer o mínimo necessário e não questiona se poderia fazer mais."
            }
        ]
    },
    {
        enunciado: "Apesar dos esforços, sua performance cai e sua renda é reduzida, levando a uma crise financeira. Como você lida com isso?",
        alternativas: [
            {
                texto: "Mantenho uma visão positiva e vejo isso como uma oportunidade de aprender.",
                afirmacao: "Você mantém uma mentalidade positiva, mesmo em situações difíceis, e busca aprender com os desafios."
            },
            {
                texto: "Fico desanimado e tenho dificuldade em ver o lado positivo.",
                afirmacao: "Você se sente facilmente abatido por dificuldades e tem dificuldade em encontrar algo positivo nas adversidades."
            }
        ]
    },
    {
        enunciado: "Você decide fazer um curso para melhorar sua situação, mas enfrenta problemas pessoais e de saúde que atrapalham. Como você reage?",
        alternativas: [
            {
                texto: "Continuo focado no meu objetivo, mesmo com dificuldades",
                afirmacao: "Você consegue manter o foco e a disciplina em seus objetivos, mesmo quando as circunstâncias são desfavoráveis."
            },
            {
                texto: "Perco a motivação e me distancio dos meus objetivos",
                afirmacao: "Você perde a motivação e se afasta de seus objetivos quando enfrenta dificuldades."
            }
        ]
    },
    {
        enunciado: "Com o estresse e a falta de tempo, você começa a adotar hábitos que não estão alinhados com seus valores, como descuidar da saúde. Como você reage?",
        alternativas: [
            {
                texto: "Reavalio minhas ações e ajusto para voltar ao caminho certo",
                afirmacao: "Você reflete sobre suas ações e faz ajustes para garantir que estão alinhadas com seus valores e objetivos,diante disso, você não está preparado para enfrentar o mundo."
            },
            {
                texto: "Só percebo tarde demais e tenho dificuldade em mudar",
                afirmacao: "Você só percebe tardiamente quando suas ações se afastam de seus valores e encontra dificuldade para mudar, diante disso,você não está preparado para enfrentar o mundo,cuidado!!"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = "Ao longo de sua vida...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
