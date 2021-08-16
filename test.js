function criaCalculadora(){
    return{
        display:document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),


        iniciar(){
            this.cliqueBotoes();
        },

        realizarConta(){
            let conta = this.display.value;

            try{
                conta=eval(conta);
                if(!conta){
                    alert('conta inválida')
                }

                this.display.value = conta
            }catch(e){
                alert('conta inválida')
            }

        },

        clearDisplay(){
            this.display.value = '';
        },

        apagarUm(){
            this.display.value= this.display.value.slice(0, -1)
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagarUm();
                }
                
                if(el.classList.contains('btn-eq')){
                    this.realizarConta();
                }
            });

        },
        btnParaDisplay(valor){
            
            this.display.value += valor
        }

    };

}

const calculadora = criaCalculadora();
calculadora.iniciar();
