
let operator = ''
let currentValue = ''
let previousValue = ''

document.addEventListener("DOMContentLoaded", function(){
    // store all components on HTML in JS

    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')
    let buttons = document.querySelectorAll('.btn')

    let previous = document.querySelector('.previous-oparand')
    let currentScreen = document.querySelector('.current-operand')

    buttons.forEach((button) => button.addEventListener("click", function(e){
        handleButton(e.target.dataset.num)
        currentScreen.textContent = currentValue
    }))
})

function handleButton(but){
    currentValue += but
}