// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno {
    #nota;

    get nota() {
        return this.#nota;
    }
    set nota(valor) {
        if (valor <= 10) {
            this.#nota = valor;
        }
    }
}

const aluno1 = new Aluno();
aluno1.nota = 8;

console.log(aluno1.nota);
aluno1.nota = 7;
console.log(aluno1.nota);