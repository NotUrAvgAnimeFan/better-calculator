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
    if (num2 == 0) {
        return "can't";
    }
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

function sorting(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}


const keypad = document.querySelectorAll(".buttons");
const display = document.querySelector(".results");


let toDisplay = "";

let filledOp = false;

let num1 = 0;
let num2 = 0;
let operator = 0;

for (let i = 0; i < keypad.length; i++) {
    keypad[i].addEventListener('click', ()=> {


        if (keypad[i].id == "C") {
            num1 = 0;
            num2 = 0;
            filledOp = false;
            display.textContent = "";
            
        } else if (keypad[i].id == "operator" && filledOp == false) {
            operator = keypad[i].textContent;
            filledOp = true;
            toDisplay = toDisplay + "" + operator;
            display.textContent = toDisplay;
        } else if (keypad[i].id == "number" && filledOp == false) {
            num1 = (num1 * 10) + parseInt(keypad[i].textContent);
            toDisplay = num1;
            display.textContent = toDisplay;
        } else if (keypad[i].id == "number" && filledOp == true){
            num2 = (num2 * 10) + parseInt(keypad[i].textContent);

            display.textContent = toDisplay + num2;
        } if (keypad[i].textContent == "=") {
            display.textContent = sorting(operator, num1, num2);
        }

        

        


    });
}
