// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const resposta = {status: true, quantidade: 2, clientes: [
        { nome: "Ana" },
        { nome: "Bruna" }
    ]};

const json = JSON.stringify(resposta);
console.log(json);

const pars = JSON.parse(json)

console.log("Status:", pars.status);
console.log("Clientes:", pars.clientes);