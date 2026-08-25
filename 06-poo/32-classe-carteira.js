// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital{
    #saldo = 0;

    adicionarCredito(valor){
        if(valor > 0) this.#saldo += valor;
    }

    realizarPagamento(valor){
        
        if(this.#saldo > valor) this.#saldo -= valor;
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

const carteira = new CarteiraDigital();
carteira.adicionarCredito(100);
console.log(carteira.consultarSaldo());
carteira.realizarPagamento(50);
console.log(carteira.consultarSaldo());
