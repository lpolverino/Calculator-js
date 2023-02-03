const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b 
}

const multiply = function (a, b) {
    return a * b
}

const divide = function (a, b) {
    return a/b
}

const operate = function(operand, a , b){
    if(typeof a != 'number'){
        a = parseInt(a);
    }
    if(typeof b != 'number'){
        b = parseInt(b);
    }
    switch (operand){
        case '+':
             return add(a,b);
             break;
        case '-':
             return subtract(a,b);
             break;
        case '*':
             return multiply(a,b);
             break;
        case '/':
             return b === 0 ? "you cannot divide by zero":divide(a,b).toFixed(3);
             break;
        default:
            console.log(`error uknow operand ${operand}`);
    }
}

const buttons = document.querySelectorAll('.button-number');
const display = document.querySelector('p');
let displayNumber;
let firstNumber=null;
let operator;
let itsResult = false;

buttons.forEach(button => button.addEventListener('click',() =>{
    if(display.innerText.startsWith('D') || itsResult){
        display.innerText = '';
        itsResult = false;
    }
    display.innerText += button.textContent;
    displayNumber = display.innerText;
}))

const opButtons = document.querySelectorAll('.button-operator');
opButtons.forEach(button => button.addEventListener('click', () =>{
    if(button.textContent ==='='){
        display.innerText = operate(operator, firstNumber, displayNumber);
        itsResult = true;
    }else{
        if(firstNumber == null){
            firstNumber = display.innerText;
            display.innerText=''
        }else{
            firstNumber = operate(operator, firstNumber, displayNumber);
            display.innerText = firstNumber;
            itsResult = true;
        }
        operator = button.textContent;
    }
}))

const clearButton =document.querySelector('.clear');
clearButton.addEventListener('click',() =>{
    display.innerText = '';
    operator=''
    firstNumber=null;
})