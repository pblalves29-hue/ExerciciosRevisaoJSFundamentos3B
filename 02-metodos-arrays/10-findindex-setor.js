// EXERCÍCIO 10 - FINDINDEX - SETOR
// Crie um array com os setores: Vendas, Financeiro, TI e RH.
// Utilize findIndex() para descobrir a posição de "TI".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const areas = ["Vendas", "Financeiro", "TI", "RH"];

const posicao = areas.findIndex(area => area === "TI");
console.log(posicao);