import { Calculator } from "./calculator.js";

// Setup variables and get a calculator instance
let equalBtn = document.getElementById('equalBtn');
let clearBtn = document.getElementById('clearBtn');
let firstNum = ''
let secondNum = ''
let operator = ''
const myCalculator = new Calculator();

equalBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearValues);

// function CreateCalculator() {}

// Checks if both numbers are numbers.
function checkIfNumber(x, y){
    if (isNaN(x) === false && isNaN(y) === false){
        return true
    } else {
        return false
    }
}

// Perform a calculation when the operator button is clicked
function calculate() {
    firstNum = document.getElementById('firstNum').value
    secondNum = document.getElementById('secondNum').value
    operator = getOperator();
    // Check if both input fields are numbers
    if(checkIfNumber(firstNum, secondNum)){
        myCalculator.firstNumber = Number(firstNum)
        myCalculator.secondNumber = Number(secondNum)
        myCalculator.operator = operator
        myCalculator.operate()
        console.log(myCalculator.value)
    } else {
        console.log("Please enter only numbers")
    }
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById('firstNum').value = ' ';
    document.getElementById('secondNum').value = ' ';
    document.getElementById('add').checked = true;
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */

function getOperator() {
    let checkedBtn = document.querySelector('input[name="asdm"]:checked').value;
    return checkedBtn
}
