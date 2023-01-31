//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Bruno', idade: 18},
    { nome: 'Thiago', idade: 15},
    { nome: 'Gidalia', idade: 45},
    { nome: 'Joel', idade: 48},
    { nome: 'Beatriz', idade: 79},
    {nome: 'Josué', idade: 114},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasIdosas = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasIdosas);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);
