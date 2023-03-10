import { Modal } from './modal.js' // importando o modal
import {AlertError} from './alert-error.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//Jogamos para dentro do Const Modal:
// const modalWrapeer = document.querySelector('.modal-wrapper') 
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

// Estruturando os Dados do Modal (abrir e fechar):


form.onsubmit = (event) => {    
    event.preventDefault() 

    const weight = inputWeight.value    
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError) {
        AlertError.open()

        return;           
    }
    
    AlertError.close()
    

    const result = IMC(weight, height)
    const message = `O seu IMC é de ${result}`    

    Modal.message.innerText = message               
    //modalWrapeer.classList.add('open')  COLOCO DENTRO DO Const Modal open:function
    Modal.open()
}
    
Modal.buttonClose.onclick = () => {               
    //modalWrapeer.classList.remove('open') COLOCO DENTRO DO Const Modal close:function
    Modal.close()
}

//função criada para serem inseridos apenas números no input:

    function notANumber (value) {
        return isNaN(value) || value == ""      
    }

function IMC(weight, height) {                             
    return (weight / ((height / 100) ** 2)).toFixed(2)   

}

//Fechar a Janela de erro ao digitar no campo

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()