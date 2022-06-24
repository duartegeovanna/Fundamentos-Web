var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')
var nomeOk = false
var emailOk = false
var assuntoOk = false


function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <= 2){
         txtNome.innerHTML = 'Nome inválido!'
         txtNome.style.color = 'red'
         nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
            txtEmail.innerHTML = 'email válido!'
            txtEmail.style.color = 'green'  
            emailOk = true   
    }else{
        txtEmail.innerHTML = 'email inválido!'
        txtEmail.style.color = 'red'  
        emailOk = false
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }else
        txtAssunto.style.display = 'none'
        assuntoOk = true


}

function Enviar(){
    if(nomeOk == true && emailOk == true){
        alert('preenchido corretamente, enviado!!')
    }else{
        alert('preencha o campo corretamente!')
    }
}