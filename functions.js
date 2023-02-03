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
             return divide(a,b);
             break;
        default:
            console.log(`error uknow operand ${operand}`);
    }
}

const buttons = document.querySelectorAll('.button-number');
const display = document.querySelector('p');
console.log(buttons);
console.log(display);
let displayNumber;
let firstNumber=null;
let operator;

buttons.forEach(button => button.addEventListener('click',() =>{
    if(display.innerText.startsWith('D')){
        display.innerText = '';
    }
    display.innerText += button.textContent;
    displayNumber = display.innerText;
}))

const opButtons = document.querySelectorAll('.button-operator');
opButtons.forEach(button => button.addEventListener('click', () =>{
    if(button.textContent ==='='){
        display.innerText = operate(operator, firstNumber, displayNumber)
    }else{
        operator = button.textContent;
        if(firstNumber == null){
            firstNumber = display.innerText;
            display.innerText=''
        }else{
            //opera con first number y guardalo ahi
            firstNumber = operate(operator, firstNumber, displayNumber);
        }
    }
}))

const clearButton =document.querySelector('.clear');
clearButton.addEventListener('click',() =>{
    display.innerText = '';
    operator=''
    firstNumber=null;
})