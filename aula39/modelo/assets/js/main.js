const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let i of paragrafos) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white';
};