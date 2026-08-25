// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
    {id: 1, descricao: "Andar", concluida: true},
    {id: 2, descricao: "comer", concluida: true},
    {id: 3, descricao: "cagar", concluida: false},
]

const json = JSON.stringify(tarefas);
console.log(json);