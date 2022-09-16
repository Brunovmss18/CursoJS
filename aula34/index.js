const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Vinicios',
    idade: 18,
    endereco: {
        rua: 'Rua das Alagoas',
        numero: 75
    }
};

//Atribuição via desestruturação
const { nome, ...resto } = pessoa;
console.log(nome, resto);