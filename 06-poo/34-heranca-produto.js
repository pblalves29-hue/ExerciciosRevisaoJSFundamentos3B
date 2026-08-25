// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Produto com nome, preço e um método exibirDados().
// Crie a classe ProdutoDigital que herde de Produto e receba também o tamanhoArquivo.
// Utilize super() no constructor e sobrescreva exibirDados() incluindo o tamanho.
//
// Escreva sua solução abaixo:

class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    exibirDados(){
        console.log(this.nome, this.preco);
    }
}
class ProdutoDigital extends Produto{
    constructor(nome, preco, tamanho){
        super(nome, preco);
        this.tamanho = tamanho;
    }
}

const produto = new Produto("Mesa", 400);
produto.exibirDados();
const produtoDigital = new ProdutoDigital("Mouse", 200, "grande");
produtoDigital.exibirDados();