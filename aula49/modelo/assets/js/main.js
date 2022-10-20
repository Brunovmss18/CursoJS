const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(textInput) {
    const li = criaLi();
    li.innerHTML = textInput;
    tarefas.appendChild(li);
}

btnTarefa.addEventListener('click', function(event) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});