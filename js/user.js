//Pegar os elementos a trabalhar
const menu=document.querySelector('#hamb')
const ul=document.querySelector('ul')
const nav =document.querySelector('nav')
/*Variavel de controle*/
var controleMenu=1
/*Evento para o menu*/
function menuAction(){
  menu.addEventListener('click',(evt)=>{
    ++controleMenu//2-primeira vez
    if(controleMenu%2==0){
      ul.style.display="block"
      nav.classList.add('addMenu')
    }else{
      ul.style.display="none"
      nav.classList.remove('addMenu')
    }
  })
}
menuAction()
