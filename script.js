const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
let counter = 0

incrementBtn.addEventListener('click',()=>{
    const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter
})

decrementBtn.addEventListener('click',()=>{
    const counterEl2 = document.getElementById('counter')
    counter--
    counterEl2.innerText = counter
})