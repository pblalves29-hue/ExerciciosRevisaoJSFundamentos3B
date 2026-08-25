// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
    { titulo: "Vava", plataforma: "PC", classificacao: 16},
    { titulo: "Mine", plataforma: "Mobile", classificacao: 10},
    { titulo: "Tf2", plataforma: "PC", classificacao: 18},
]

jogos.forEach(jogo => console.log(jogo.titulo, jogo.plataforma));