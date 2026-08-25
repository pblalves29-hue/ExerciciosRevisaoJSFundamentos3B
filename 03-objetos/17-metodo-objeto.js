// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto circulo com a propriedade raio e um método calcularArea().
// O método deve retornar Math.PI * raio * raio.
// Mostre a área com duas casas decimais.
//
// Escreva sua solução abaixo:

class Circulo{

    calcularArea(raio){
        this.raio = raio;
        return Math.PI * raio * raio;
    }
}
const circulo = new Circulo()
console.log(circulo.calcularArea(8).toFixed(2));
