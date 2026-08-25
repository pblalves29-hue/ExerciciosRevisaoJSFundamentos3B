// EXERCÍCIO 02 - VERIFICAR FRETE GRÁTIS
// Crie uma função que receba o valor de uma compra e retorne
// "Frete grátis" quando o valor for maior ou igual a R$ 150
// e "Frete pago" nos demais casos.
//
// Escreva sua solução abaixo:

function verificarFrete(valorCompra){
    return valorCompra >= 150 ? "Frete Grátis" : "Frete pago";
}
let resultado = verificarFrete(170);
console.log(resultado);
