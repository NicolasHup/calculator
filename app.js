
let operator = ''
let currentValue = ''
let previousValue = ''

document.addEventListener("DOMContentLoaded", function(){
    // store all components on HTML in JS

    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')
    let buttons = document.querySelectorAll('.btn-grey')
    let opertors = document.querySelectorAll('.btn-func')

    let previousScreen = document.querySelector('.previous-oparand')
    let currentScreen = document.querySelector('.current-operand')

    buttons.forEach((button) => button.addEventListener("click", function(e){
        handleButton(e.target.textContent)
        currentScreen.textContent= currentValue
    }))

    opertors.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator
        currentScreen.textContent = currentValue
    }))

    clear.addEventListener("click", function (){
        previousValue = ''
        currentValue = ''
        operator = ''

        previousScreen.textContent = currentValue
        currentScreen.textContent = currentValue
    })

    equal.addEventListener("click", function() {
        if(currentValue != '' && previousValue != ''){
        calculate() 
        previousScreen.textContent = ''
        currentScreen.textContent = previousValue
        }
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

function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === "+") {
        previousValue += currentValue
    } else if (operator === "-") {
        previousValue -= currentValue
    } else if (operator === "x") {
        previousValue *= currentValue
    } else {
        previousValue /= currentValue
    }
    
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
}

function roundNumber(num) {
    return Math.round(num *1000) / 1000
}