filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




/* No onload da página, criar uma div como appendChild da class container, como no formato da filterDiv :

    <div class="filterDiv construcao">  --> adicionar uma classe secundária como "construção" ou "eletrica", dependendo da categoria classificada;
        
      <li id="perfilConstrucao">
                  <ul id="categoria">Construção</ul>
                  <ul id="regiao">Região</ul>
                  <ul id="nome">Nome</ul>
                  <ul id="experiencia">Experiência</ul>
                  <ul id="telefone">Telefone1, telefone2</ul>
      </li>

    </div>

*/







  
/*  FUNÇÃO SOMENTE PARA VERSÃO FUTURA
var mostraNumero;
function mostrar() {

  if( mostraNumero == 1 ){

    document.getElementById("numero").style.display="none";
    return mostraNumero=0;

  } else {

    document.getElementById("numero").style.display="inline";
    return mostraNumero=1;
    
  }
}
*/

