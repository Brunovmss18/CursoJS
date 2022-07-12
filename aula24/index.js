/*
&& -> false && true -> false  "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

falsy
*false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz' && 'Maria');
console.log(0 || false || null || 'Luiz Otávio' || true);

const a = 0;
const b = null;
const c = 'false'
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
