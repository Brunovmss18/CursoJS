//defineProperty - defineProperties 
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: estoque, //valor
        writable: true, //pode alterar
        configurable: true //configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra chave
            value: nome, //valor
            writable: true, //pode alterar
            configurable: true //configurável
        },
        preco: {
            enumerable: true, //mostra chave
            value: preco, //valor
            writable: true, //pode alterar
            configurable: true //configurável
        },
    });
}

const p1 = new Produto('camiseta', 20, 3);
console.log(Object.keys(p1)); 