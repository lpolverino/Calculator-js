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