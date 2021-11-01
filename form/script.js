
// aqui nesse objeto vamos criar ulgumas funçoes
let b7validator = {
    // funcao recebe o evento, e para ele 
    handleSubmit:(event)=>{
        event.preventDefault(); // prevent defalut, previne o evento padrão (nesse caso enviar o formulario)
        let send = true;

        let inputs = form.querySelectorAll('input');

        b7validator.clearErrors(); // função que vai limpar o alerta de erro do input quando ele for resolvido
    



        //AQUI É UM LOOP EM CADA UM DOS campos e validando eles individualmente pq selecionamos todos com o
        // queryselector
        for(let  i=0;i<inputs.length;i++){
            let input = inputs[i];
            let check = b7validator.checkInput(input);
            if(check !== true) {
                send = false;
            b7validator.showError(input, check);
            }
        }

        if(send){
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules'); // aqui verifica se tem alguma regra


        if(rules !== null )   {           // se nao tiver passa para frente 
            rules = rules.split('|'); // a barrinha que separa as regras
            for(let k in rules ){
                let rulesDetails = rules[k].split('=');
                switch(rulesDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Esse campo não pode ficar vazio. ';
                        }
                    break;
                    case 'min':

                    break;

                }
            }
        }
        return true;
    },
    showError:(input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;


        input.parentElement.insertBefore(errorElement, input.ElementSiblign)
    },
    clearErrors:() =>{
        let inputs = form.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++){
            inputs[i].style = '';
        }


         let errorElements = document.querySelectorAll('.error');
         for(let i=0;1 <errorElements.length;i++) {
             errorElements[i].remove();
         }  
    }

};

let form = document.querySelector('.b7validador')
form.addEventListener('submit', b7validator.handleSubmit )// ele vai monitorar o evento de envio

// aqui estamos fazendo um bloqueio, para poder validar (ent ele entra no meio do envio do formulario)
