
//MODULARIZANDO O MODAL POPUP:


export const Modal = { //incluir o export no const Modal. Agora posso enviar para qualquer outro lugar que eu quiser utilizar no futuro. Neste caso, vou utilizar no script2

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {                            //open recebe uma função
        Modal.wrapper.classList.add('open')
    }, 
    close() {                         //close recebe uma função
        Modal.wrapper.classList.remove('open')
    } 
}

Modal.buttonClose.onclick = () => {               
    //modalWrapeer.classList.remove('open') COLOCO DENTRO DO Const Modal close:function
    Modal.close()
}

//Incluir o fechamento do Modal com a tecla "ESC":

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}

