//for in -> lê os índices ou chaves do objeto
const frutas = ['pera', 'maça', 'uva'];

for (let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Vinicios',
    idade: 18
};

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]);
}