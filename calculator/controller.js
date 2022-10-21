import { Calculator } from "./calculator";

// setup variables and get a calculator instance
function CreateCalculator() {
    let firstNumber = document.getElementById("firstNum").value;
    let secondNumber = document.getElementById("secondNum").value;
    let operator = document.querySelector('input[name="asdm":checked]').id;
    let value = 0

    const myCalculator = Calculator()
}
// perform a calculation when the operator button is clicked
function calculate() {
    myCalculator.firstNumber;
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {}

// should clear input text values and focus the first number input
function clearValues() {}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    let checkedBtn = document.querySelector('input[name="asdm":checked]').id;
    return checkedBtn
}
