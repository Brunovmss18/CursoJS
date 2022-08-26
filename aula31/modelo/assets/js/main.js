const resultado = document.getElementById('resultado');

function semana(diaSemana) {
    let diaSemanaTexto;
switch (diaSemana) {
case 0:
    return diaSemanaTexto = 'Domingo';
case 1:
    return diaSemanaTexto = 'Segunda-feira';
case 2:
    return diaSemanaTexto = 'Terça-feira';
case 3: 
    return diaSemanaTexto = 'Quarta-feira';
case 4:
    return diaSemanaTexto = 'Quinta-feira';
case 5:
    return diaSemanaTexto = 'Sexta-feira';
case 6:
    return diaSemanaTexto = 'Sabado';    
}
}

function mes(nomeMes) {
    let nomeMesTexto;
switch (nomeMes) {
case 0:
    return nomeMesTexto = 'Janeiro';
case 1:
    return nomeMesTexto = 'Fevereiro';
case 2:
    return nomeMesTexto = 'Março';
case 3:
    return nomeMesTexto = 'Abril';
case 4:
    return nomeMesTexto = 'Maio';
case 5:
    return nomeMesTexto = 'Junho';
case 6:
    return nomeMesTexto = 'Julho';
case 7:
    return nomeMesTexto = 'Agosto';
case 8:
    return nomeMesTexto = 'Setembro';
case 9:
    return nomeMesTexto = 'Outubro';
case 10:
    return nomeMesTexto = 'Novembro';
case 11:
    return nomeMesTexto = 'Dezembro';                                   
}    
}

const data = new Date();
let diaSemana = data.getDay();
let nomeMes = data.getMonth();
resultado.innerHTML = `${semana(diaSemana)}, ${data.getDate()} de ${mes(nomeMes)} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;