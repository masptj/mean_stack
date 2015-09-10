var contatos = document.querySelector('.contatos');
var total = 0;
var botao = document.querySelector('.botao-grava');

botao.addEventListener('click', function (event){
  total++;
  contatos.textContent = 'Contatos cadastrados: ' + total;
});
