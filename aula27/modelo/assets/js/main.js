function clicar() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");
    let imc = peso / (altura * altura)
    if (altura.length == " " || peso.length == " ") {
        resultado.innerHTML = 'vazio';
    } else if (isNaN(peso) && isNaN(altura)) {
        resultado.style.backgroundColor = 'red';
        resultado.innerHTML = 'Informações inválidas';
    } else if (isNaN(peso)) {
        resultado.style.backgroundColor = 'red';
        resultado.innerHTML = 'Peso inválido';
    } else if (isNaN(altura)) {
        resultado.style.backgroundColor = 'red'; 
        resultado.innerHTML = 'Altura inválida';
    } else {   
        if (Number(imc) < 18.5) {
            resultado.style.backgroundColor = 'green';
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
        } else if (Number(imc) >= 18.5 && imc <= 24.9) {
            resultado.style.backgroundColor = 'green';
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
        } else if (Number(imc) >= 25 && imc <= 29.9) {
            resultado.style.backgroundColor = 'green';
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
        } else if (Number(imc) >= 30 && imc <= 34.9) {
            resultado.style.backgroundColor = 'green';
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
        } else if (Number(imc) >= 35 && imc <= 39.9) {
            resultado.style.backgroundColor = 'green';
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
        } else {
            resultado.style.backgroundColor = 'green';
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
        } 
    }
    console.log(Number(altura) !== NaN);
}