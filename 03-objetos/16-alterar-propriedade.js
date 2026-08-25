// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

class Ingresso{
    
    constructor(evento, preco, quant){
        this.evento = evento;
        this.preco = preco;
        this.quant = quant;
    }
}

const ingresso = new Ingresso("EXPO", 100, 2);
console.log(ingresso);
ingresso.preco += 100 
ingresso.quant += 2;

console.log(ingresso);