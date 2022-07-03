/*function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Bruno', 'Vinicios', 18);
console.log(pessoa1.nome);
*/

const pessoa1 = {
    nome: 'Bruno',
    sobrenome: 'Vinicios',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
}

pessoa1.fala();