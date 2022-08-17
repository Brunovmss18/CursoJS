function clicar() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");
    let imc = peso / (altura * altura)
    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
    } else {
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
    }
}