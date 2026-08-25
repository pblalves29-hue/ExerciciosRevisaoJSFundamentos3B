// EXERCÍCIO 15 - ACESSANDO PROPRIEDADES
// Crie um objeto chamado paciente com nome, idade e convenio.
// Mostre somente o nome e o convênio utilizando acesso às propriedades.
//
// Escreva sua solução abaixo:

class Paciente {
    constructor(nome, idade, convenio){
        this.nome = nome;
        
        this.convenio = convenio;
    }
}
const paciente1 = new Paciente("Carlos", 15, "AMIL");
console.log(paciente1);