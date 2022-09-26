const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const classe = window.document.querySelector('.container');
let tgHtml = '';

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    tgHtml += `<${tag}>${texto}</${tag}>`;   
}
classe.innerHTML += `<div>${tgHtml}</div>`;
