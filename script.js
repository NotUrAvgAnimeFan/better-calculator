function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}


function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else  if (operator == '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }

}

const keypad = document.querySelectorAll(".buttons");
const display = document.querySelector(".results");

let num1;
let num2;
let operator;

for (let i = 0; i < keypad.length; i++) {
    keypad[i].addEventListener('click', ()=> {
        
    });
}
