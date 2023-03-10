/* PASSO A PASSO JS */

//Iniciamos inserindo as variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//variáveis do modal // para indicar o IMC em outra tela (vou precisar do modal wrapper, do button close e do span criado):

const modalWrapeer = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')




//3 maneiras de criar e atribuir função a um evento:
/* Lembrando que o padrão de um evento submit é recarregar a página. Esse procedimento irá evitar o padrão.

1) form.onsubmit = function () {}

2) form.onsubmit = () => {}      -------> ARROW FUNCTION

3) form.onsubmit = handleSubmit ------->HANDLE DO INGLÊS MANIPULAR/CONTROLAR. Eu estaria manipulando o submit

    function handleSubmit() {}

****Usando a forma 1:        

form.onsubmit = function(event) {        //o padrão do submit é recarregar a página. Como faço para evita o padrão?      Usando(event.preventDefault - que é evite o padrão)
    event.preventDefault()              //usando o preventDefault ele não vai mais recarregar a página. Vc pode testar usando console.log(event) 
    
    const weight = inputWeight.value   //Pegando os valores que vamos digitar no formulário (usar o value, pois o input não contém nenhum conteúdo. Sempre que digitarmos teremos o valor que colocamos):
    const height = inputHeight.value   //lembre-se sempre de testar para ver se tudo está funcionando usando o devtools(console) - console.log(weight, height)
}


// **** Usando a forma 3:   

form.onsubmit = handleSubmit

function handleSubmit(event) {        
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    console.log(weight, height)
}

*/

//Vamos trabalhar com a forma 2:

form.onsubmit = (event) => {
    
    event.preventDefault()              
    const weight = inputWeight.value    
    const height = inputHeight.value 

    const result = IMC(weight, height)
    const message = `O seu IMC é de ${result}`     //criado para alterar os dados do IMC (o cálculo está dentro do result)

    modalMessage.innerText = message              //para adicionar a mensagem (O seu IMC é de) 
    modalWrapeer.classList.add('open') //abre o modal //para aparecer o modal    
}

//clicar no X do modal e fechar:

modalBtnClose.onclick = () => {                 //poderia ser dessa forma: modalBtnClose.onclick = function () {}
    modalWrapeer.classList.remove('open') //remove o modal
}


function IMC(weight, height) {                             //função criada para fazer o cáculo de peso e altura 
    return (weight / ((height / 100) ** 2)).toFixed(2)    //**2 = elevado a 2

}




// ESTRUTURAÇÃO DE DADOS DO MODAL:

const Modal = {

}











// const Modal = {

//     wrapper: document.querySelector('.modal-wrapper'),
//     message: document.querySelector('.modal.title span'),
//     buttonClose: document.querySelector('.modal button.close'),

//     open() {  
//         Modal.wrapper.classList.add('open')       
//     }, 
//     close() {  
//         Modal.wrapper.classList.remove('open')   
//     }
// }






// // form.onsubmit = (event) => {
// //     event.preventDefault()

// //     const weight = inputWeight.value
// //     const height = inputHeight.value

// //     const result = IMC(weight, height)
// //     const message = `Seu IMC é de ${result}`

// //     Modal.message.innerText = message
// //     Modal.open()
// // }

// // Modal.buttonClose.onclick = () => {
// //     Modal.close()
  
// // }

// // function IMC(weight, height) {
// //     return (weight / ((height / 100) **2)).toFixed(2)
// // }

