let perehod = document.querySelector('.perehod')
let okno = document.querySelector('.okno')
let button = document.querySelector('.buttonclose')
console.log(perehod)
console.log(okno)
console.log(button)
perehod.addEventListener('click', function(evt){
okno.classList.add("show")

})
button.addEventListener('click', function(evt){
  okno.classList.remove("show")
})

