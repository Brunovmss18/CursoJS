//Declaração de função (function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();

//first-class objects (objetos de primeira classe)
//function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

//Arrow function
const funcaoArraow = () => {
    console.log('Sou um arrow function');
};
funcaoArraow();

//Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();