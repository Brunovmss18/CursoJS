/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);                
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();

            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

function Calculadora() {
    const display = document.querySelector('display');
    
    this.inicia = function() {
        cliqueBotoes();
        pressionaEnter();
    };

    let pressionaEnter = function() {
        this.display.addEventListener('keyup', function(e) {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

     let clearDisplay = function() {
        display.value = '';
    };

    let apagaUm = function() {
        display.value = display.value.slice(0, -1);
    };

     let realizaConta = function() {
        let conta = display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            display.value = String(conta);
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    let cliqueBotoes = function() {
        document.addEventListener('click', function(e) {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }
    
            if(el.classList.contains('btn-clear')) {
                clearDisplay();
            }
    
            if(el.classList.contains('btn-del')) {
                apagaUm();
            }
    
            if(el.classList.contains('btn-eq')) {
                realizaConta();
            }
    
            display.focus();

        }.bind(this));

    };

    let btnParaDisplay = function(valor) {
        display.value += valor;  
    };
    
}

const c = new Calculadora();
c.inicia();
