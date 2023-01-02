// Função contrutora -> objetos
// Função fábrica -> objetos
// contrutora -> pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ':sou um método');
    };

}

const p1 = new Pessoa('Bruno', 'Vinicios');
const p2 = new Pessoa('Gidalia', 'Morais');
p2.metodo();