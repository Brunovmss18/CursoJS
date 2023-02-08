//Literal
const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Vinicios'
};
const chave = 'sobrenome';
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa[chave]);

//Construtor
const pessoa1 = new Object();
pessoa1.nome = 'Bruno';
pessoa1.sobrenome = 'Vinicios';
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome, 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Bruno', 'Vinicios');
console.log(p1.nomeCompleto);

//Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Bruno', 'Vinicios');
console.log(p2);