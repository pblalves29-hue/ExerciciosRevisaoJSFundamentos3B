// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    {nome: "João", matricula: 262},
    {nome: "Robson", matricula: 222},
    {nome: "Robert", matricula: 212},
    {nome: "Leonardo", matricula: 103},
];

const search = alunos.find(aluno => aluno.matricula == 103);
console.log(search);