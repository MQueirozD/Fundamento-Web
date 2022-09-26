let nome = window.document.getElementById('nome'); 
let email = document.querySelector('#email');
let assunto = document.querySelector ('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let iconFace = document.querySelector('#iconFace');
let iconInsta = document.querySelector('#iconInsta');
let iconLinkedin = document.querySelector('#iconLinkedin');
let iconGithub = document.querySelector('#iconGithub');

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome() {
    //validação de campo!!    
    let txtNome = document.querySelector('#txtNome') //como se criasse uma variavel
    
    if (nome.value.length < 3) {
        // alert ('nome invalido')
        txtNome.innerHTML = "Nome invalido!!"
        txtNome.style.color = "red"
    }
    else{
        txtNome.innerHTML = "Nome Válido!!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector ('#txtEmail')
    
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email invalido!!"
        txtEmail.style.color = "red"
    }
    else{
        txtEmail.innerHTML = "Email Válido!!"
        txtEmail.style.color = "green"
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector ('#txtAssunto')

    if (assunto.value.length >= 5){
        txtAssunto.innerHTML = 'Texto maior que 100 caracteres'
        txtAssunto.style.color = "red"
    }
    else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario enviado com sucesso!')
    }
    else{
        alert ('Preencha o fulmario corretamente!!')
    }
}

