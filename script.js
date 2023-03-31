const add = (a, b) => parseInt(a) + parseInt(b)
const subtract = (a, b) => a - b
const multiply = (a, b) => parseInt(a) * parseInt(b)  
const divide = (a , b) => parseFloat((a / b).toFixed(2))

let firstNumber
let secondNumber
let operation = '0'

const operate = (firstNum, secondNum, operation) => {
    if (operation == '+'){
        return add(firstNum, secondNum)
    }
    else if (operation == '-'){
        return subtract(firstNum, secondNum)
    }
    else if (operation == '*'){
        return multiply(firstNum, secondNum)
    }
    else if (operation == '/'){
        return divide(firstNum, secondNum)
    }
    else return (alert('error'))
}

const display = document.querySelector(".display")
let value = ''

const numBtn = document.querySelectorAll('.num-btn')
numBtn.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent
    })
})

const operationBtn = document.querySelectorAll(".operation-btn")
operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (operation != '0'){
            secondNumber = display.textContent.split(' ')[2]
            display.textContent = operate(firstNumber, secondNumber, operation)
        }
        firstNumber = display.textContent
        operation = button.textContent
        display.textContent += ` ${operation} `
    })
})

const enter = document.querySelector('.enter')
enter.addEventListener('click', () => {
    secondNumber = display.textContent.split(' ')[2]
    display.textContent = operate(firstNumber, secondNumber, operation)
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    display.textContent = ''
    operation = '0'
})

const back = document.querySelector('.back')
back.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
})