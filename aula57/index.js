//Factory function(função fábrica)
//Constructor function(função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Bruno', 'Vinicios', 1.59, 56);
p1.nomeCompleto = 'Thiago Camilo Morais';
console.log(p1.nomeCompleto);
