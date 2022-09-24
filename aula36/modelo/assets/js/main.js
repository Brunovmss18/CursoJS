const classe = window.document.getElementsByClassName('container');

const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];
window.document.createElement()
for (let i = 0; i < elementos.length; i++) {
    let tague = classe.document.createElement(elementos[i].tag);
    tague.style.innerHTML = `${elementos[i].texto}` 
}