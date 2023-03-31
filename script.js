const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a , b) => a * b
const divide = (a , b) => parseFloat((a / b).toFixed(2))

let firstNumber
let secondNumber
let operation

const operate = (firstNum, secondNum, operation) => {
    operation(firstNum, secondNum)
}