
let operator = ''
let currentValue = ''
let previousValue = ''

document.addEventListener("DOMContentLoaded", function(){
    // store all components on HTML in JS

    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')
    let buttons = document.querySelectorAll('.btn')
    let opertors = document.querySelectorAll('.btn-func')

    let previousScreen = document.querySelector('.previous-oparand')
    let currentScreen = document.querySelector('.current-operand')

    buttons.forEach((button) => button.addEventListener("click", function(e){
        handleButton(e.target.dataset.num)
        currentScreen.textContent = currentValue
    }))

    opertors.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.dataset.num)
        previousScreen.textContent = previousValue 
        currentScreen.textContent = currentValue
    }))

    clear.addEventListener("click", function (){
        previousValue = ''
        currentValue = ''
        operator = ''

        previousScreen.textContent = currentValue
        currentScreen.textContent = currentValue
    })
})

function handleButton(but){
    //restrict the user user from enters more numbers using an if statement//////////(overflow of numbers on the screen)
    currentValue += but  
}

function handleOperator(op) {
    operator = op
    previousValue = currentValue
    currentValue = ''
}