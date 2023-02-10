//defineProperty - defineProperties 
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        configurable: true, //configurável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Inválido');
                return;
            }
            estoque = valor;
        }
    });

}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);