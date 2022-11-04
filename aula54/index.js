function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('bruno');
const funcao2 = retornaFuncao('vinicios');
console.dir(funcao);
console.dir(funcao2)
console.log(funcao(), funcao2());
