const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

function mostraHora() {
    const data = new Date('01-01-1970 00:00:00');

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

iniciar.addEventListener('click', function() {
    setInterval(function() {
        relogio.innerHTML = `${mostraHora()}`;
    }, 1000)
});

pausar.addEventListener('click', function(event) {
    alert('cliquei no pausar');
});

zerar.addEventListener('click', function(event) {
    alert('cliquei no zerar');
});


