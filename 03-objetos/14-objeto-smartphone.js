// EXERCÍCIO 14 - CRIANDO OBJETO
// Crie um objeto chamado smartphone com as propriedades marca, modelo, armazenamento e ligado.
// Mostre o objeto completo no console.
//
// Escreva sua solução abaixo:

class Smartphone {
    constructor(marca, modelo, armazenamento, ligado) {
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
        this.ligado = ligado;
    }

    showDatas() {
        console.log(`Marca - ${this.marca} | Modelo - ${this.modelo} | Armazenamento - ${this.armazenamento} | Ligado - ${this.ligado}`)
    }
}

const smartphone = new Smartphone("Samsung", "M53", 64, true);
smartphone.showDatas();