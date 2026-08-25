// EXERCÍCIO 12 - EVERY - PRODUTOS DISPONÍVEIS
// Considere as quantidades: [4, 2, 7, 1, 6].
// Utilize every() para verificar se todos os produtos possuem estoque maior que zero.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const quantidadesEstoque = [4, 2, 7, 1, 6];

const verify = quantidadesEstoque.every(quant => quant > 0);
console.log(verify);