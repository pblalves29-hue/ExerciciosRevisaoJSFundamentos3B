// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
    {nome: "Kleber", salario: 1500},
    {nome: "Cleber", salario: 3100},
    {nome: "Robson", salario: 3500},
    {nome: "Robinho", salario: 2500},
    {nome: "Daniel", salario: 1000},
]

const search = funcionarios.filter(funcionario => funcionario.salario > 3000);
console.log(search);