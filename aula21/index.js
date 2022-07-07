function clicar() {
    const form = document.querySelector("#form");
    const res = document.querySelector("#res");
    const pessoas = [];
    form.onsubmit = function (evento) {
        evento.preventDefault();
        const nome = form.querySelector("#Nome").value;
        const sobreNome = form.querySelector("#Sobrenome").value;
        const peso = form.querySelector("#Peso").value;
        const altura = form.querySelector("#Altura").value;
        pessoas.push({nome: nome, sobrenome: sobreNome, peso: peso, altura: altura});
        console.log(pessoas);
        res.innerHTML += `${nome} ${sobreNome} ${peso} ${altura} <br />`;
    }
}