var btnSignin = document.getElementById("signin");
var btnSignup = document.getElementById("signup");

var body = document.getElementById("body-total");

btnSignin.addEventListener("click", function(){
  body.className = "sign-in-js";
  
});

btnSignup.addEventListener("click", function(){
  body.className = "sign-up-js";
  
});

function validaForm(){
  var form = document.forms['form-cadastro'];

  var nome = form.nome.value;
  var senha = form.senha.value;
  var confirmeAsenha = form.confirmeAsenha.value;

  if(nome.trim() == ""){
    alert('O campo nome está vazio, favor, preenche-lo');
    form.nome.focus();
    return false;
  }  else if(senha.trim() == ""){
    alert('O campo senha está vazio, favor, preenche-lo');
    form.senha.focus();
    return false;
  }
  else if(confirmeAsenha.trim() == ""){
    alert('O campo confirme a senha está vazio, favor, preenche-lo');
    form.confirmeAsenha.focus();
    return false;
  }
  else if (senha.length < 6){
    alert("A senha precisa ter 6 caracteres.");
    form.senha.focus();
    return false;
  }
  else if (confirmeAsenha.length < 6){
    alert("A senha precisa ter 6 caracteres.");
    form.confirmeAsenha.focus();
    return false;
  }
  else if(senha != confirmeAsenha){
    alert('As senhas não coincidem.');
    form.senha.focus();
    return false;
  }else{
    alert('Tudo Certo!');
    return true;
  }
}

function validaFormLogin(){
  // valida o email
  expreReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

  var form = document.forms['form-login'];

  var email = form.email.value;
  var senha = form.senha.value;

  if(!email.match(expreReg)){
    alert('Email inválido');
    form.email.focus();
    return false;
  }else if(senha.trim() == ""){
    alert("A senha não pode ser vazia.");
    form.senha.focus();
    return false;
  }else if(senha.trim().length < 6){
    alert('A Senha não pode conter menos de 6 caracteres.');
    form.senha.focus();
    return false;
  }else{
    alert('Tudo certo!');
    return true;
  }
}


function detectaLetra(event){
  regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  tecla = event.key;

  if (!tecla.match(regex)){
    return false
  }
}