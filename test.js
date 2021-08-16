function criaCalculadora(){
    return{
        display:document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),


        iniciar(){
            this.cliqueBotoes();
        },

        realizarConta(){
            // @ts-ignore
            let conta = this.display.value;

            try{
                conta=eval(conta);
                if(!conta){
                    alert('conta inválida')
                }

                // @ts-ignore
                this.display.value = conta
            }catch(e){
                alert('conta inválida')
            }

        },

        clearDisplay(){
            // @ts-ignore
            this.display.value = '';
        },

        apagarUm(){
            // @ts-ignore
            this.display.value= this.display.value.slice(0, -1)
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                // @ts-ignore
                if(el.classList.contains('btn-num')){
                    // @ts-ignore
                    this.btnParaDisplay(el.innerText)
                }
                // @ts-ignore
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                // @ts-ignore
                if(el.classList.contains('btn-del')){
                    this.apagarUm();
                }
                // @ts-ignore
                if(el.classList.contains('btn-eq')){
                    this.realizarConta();
                }
            });

        },
        btnParaDisplay(valor){
            // @ts-ignore
            this.display.value += valor
        }

    };

}

const calculadora = criaCalculadora();
calculadora.iniciar();