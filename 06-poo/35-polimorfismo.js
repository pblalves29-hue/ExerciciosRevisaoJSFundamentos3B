// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:

class Pagamento {
    processar() {
        console.log("Processando pagamento");
    }
}

class Pix extends Pagamento {
    processar() {
        console.log("Pagamento pix");
    }
}

class Cartao extends Pagamento {
    processar() {
        console.log("Pagamento cartão");
    }
}

const formasPagamento = [
    new Pix(),
    new Cartao(),
    new Pagamento(),
];

formasPagamento.forEach(forma => forma.processar());