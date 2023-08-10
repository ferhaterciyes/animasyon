const open = document.getElementById('open')
const close = document.getElementById('close')
const conteiner = document.querySelector(".conteiner")

open.addEventListener('click',() =>{
    conteiner.classList.add('shov-nav')
})
close.addEventListener('click', () =>{
conteiner.classList.remove('shov-nav')

})