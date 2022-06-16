/*
Luiz Otávio Mirando tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const data = new Date();
const ano = data.getFullYear();
const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const pesoEmKg = 84;
const alturaEmMetros = 1.8;
let indiceMassaCorporal = pesoEmKg / (alturaEmMetros * alturaEmMetros);
let anoNascimento = ano - idade;

// template strings

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${pesoEmKg}Kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
