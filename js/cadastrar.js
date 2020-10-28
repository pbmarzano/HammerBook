var profissional = []

var categoria = document.getElementById("categoria")
var nome = document.getElementById("nome")
var cpf = document.getElementById("cpf")
var telefone1 = document.getElementById("telefone1")
var telefone2 = document.getElementById("telefone2")
var regiao = document.getElementById("regiao")
var exp = document.getElementById("experiencia")
var senhaCadastro = document.getElementById("senhaCadastro")
var senhaConfirma = document.getElementById("senhaConfirma")

function Profissional(categoria, nome, cpf, telefone1, telefone2, regiao, exp, senhaCadastro, senhaConfirma){
  this.categoria = categoria
  this.nome = nome
  this.cpf = cpf
  this.telefone1 = telefone1
  this.telefone2 = telefone2
  this.regiao = regiao
  this.exp = exp
  this.senhaCadastro = senhaCadastro
  this.senhaConfirma = senhaConfirma
}

/*function cadastrar(){
  var add = new Profissional(categoria.value, nome.value, cpf.value, telefone1.value, 
    telefone2.value, regiao.value, exp.value, senhaCadastro.value, senhaConfirma.value)
    profissional.push(add)
    
    window.localStorage.setItem("profissional", JSON.stringify(profissional))
  alert("Cadastro feito com sucesso!")
}*/


function cadastrar(){

  profissional = JSON.parse(localStorage.getItem("Profissional")) 

  if (profissional == null){
      
      profissional = []
      add = new Profissional (categoria.value, nome.value, cpf.value, telefone1.value, 
        telefone2.value, regiao.value, exp.value, senhaCadastro.value, senhaConfirma.value)
      profissional.push(add)
      localStorage.setItem("Profissional", JSON.stringify(profissional))
      alert ("Seu cadastro foi efetuado com sucesso")

  } else{
    add = new Profissional (categoria.value, nome.value, cpf.value, telefone1.value, 
      telefone2.value, regiao.value, exp.value, senhaCadastro.value, senhaConfirma.value)
      profissional.push(add)
      localStorage.setItem("Profissional", JSON.stringify(profissional))
      alert ("Seu cadastro foi efetuado com sucesso")
  }
}



function validaCategoria(){
  
  if(categoria.value == 0 || categoria.value == ""){
    alert("Qual a sua categoria?")
    categoria.focus()
  } else if(categoria.value == construcao){
    return true
  } else if(categoria.value == eletrica){
    return true    
  } else if(categoria.value == hidraulica){
    return true
  } else if(categoria.value == faxina){
    return true
  } else {
    return false
  }

  localStorage.setItem("categoria", JSON.stringify(categoria))
}

function validaNome(){
  
  if(nome.value == ""){
    alert("Digite o seu nome!")
    nome.focus()
  } else {
    return true
  }
  
  localStorage.setItem("nome", JSON.stringify(nome))
}

function validaCpf(){
  var soma = 0
  var resto

  if (cpf == "00000000000") return false;

  for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) )
  console.log('CPF inválido')

  soma = 0;
  for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false
  console.log('CPF válido')

  localStorage.setItem("cpf", JSON.stringify(cpf))
}

function validaTelefone(){
  
  function delTele(){
    document.getElementById("telefone2") = ""
  }
  
  if(telefone1.value == "" || telefone2.value == ""){
    alert("Digite o seu número")
    telefone1.focus()
  } else if(telefone2.value = telefone1.value){
    alert("O segundo telefone não pode ser igual ao primeiro.")
    telefone2.focus()
    return delTele()
  } else {
    return true
  }
  
  localStorage.setItem("telefone", JSON.stringify(telefone1))
  localStorage.setItem("telefone", JSON.stringify(telefone2))
  
}

function validaRegiao(){
  
  if(regiao.value == 0 ||
    regiao.value == ""){
    alert("Qual a região em que você mora?")
  } else if(regiao.value == continente){
    return true
  } else if(regiao.value == centro){
    return true
  }  else if(regiao.value == norte){
    return true
  } else if(regiao.value == sul){
    return true
  } else if(regiao.value == leste){
    return true
  } else {
    return false
  }
  
  localStorage.setItem("regiao", JSON.stringify(regiao))
  //DÚVIDA SE PODE USAR O .VALUE
}

function validaExperiencia(){

  localStorage.setItem("experiencia", JSON.stringify(e))

}

function validaSenha(){

  if(senhaCadastro.value == ""){
    alert("Crie uma senha")
    senhaCadastro.focus()
  } else if(senhaConfirma.value = ""){
    alert("Confirme sua senha")
    senhaConfirma.focus()
  } else if(senhaCadastro.value != senhaConfirma.value){
    alert("As senhas estão diferentes!")
    senhaCadastro = ''
    senhaConfirma = ''
    senhaCadastro.focus()
  } else {
    return true
  }
  
  localStorage.setItem("senha", JSON.stringify(senhaCadastro))
}