import { Calculator } from "./calculator.js";

// Setup variables and get a calculator instance
let equalBtn = document.getElementById('equalBtn');
let clearBtn = document.getElementById('clearBtn');
let statement = document.getElementById('statement');
let firstNum;
let secondNum;
let operator;

const myCalculator = new Calculator(0, 0, 'add');

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
    firstNum = Number(document.getElementById('firstNum').value);
    secondNum = Number(document.getElementById('secondNum').value);
    operator = getOperator();
    // Check if both input fields are numbers
    if(checkIfNumber(firstNum, secondNum)){
        myCalculator.firstNumber = firstNum
        myCalculator.secondNumber = secondNum
        myCalculator.operator = operator
        if(myCalculator.operate()){
            let finalStringBit = `${myCalculator.firstNumber} and ${myCalculator.secondNumber} is ${myCalculator.value}`

            switch (myCalculator.operator){
                case 'add': statement.textContent = `The result of adding ${finalStringBit}`;
                break;
                case 'subtract': statement.textContent = `The result of subtracting ${finalStringBit}`;
                break;
                case 'multiply': statement.textContent = `The result of multiplying ${finalStringBit}`;
                break;
                case 'divide': statement.textContent = `The result of dividing ${finalStringBit}`;
                break;
            }
        } else {
            clearValues();
            statement.textContent = "You can't divide by 0"
        } 
    } else {
        clearValues();
        statement.textContent = "Please enter only numbers"
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
    document.getElementById('statement').textContent = '';
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */

function getOperator() {
    let checkedBtn = document.querySelector('input[name="asdm"]:checked').value;
    return checkedBtn
}
