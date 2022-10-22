export class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    // getAction() {}

    // performa a calculation based on the currently selected operation
    operate() {
        switch (this.operator){
            case 'add': this.add();
            break;
            case 'subtract': this.subtract();
            break;
            case 'multiply': this.multiply();
            break;
            case 'divide': this.divide();
            break;
        }
    }

    // perform addition operation
    add() {
        this.value = this.firstNumber + this.secondNumber
        return true
    }
    
    // perform subtraction operation
    subtract() {
        console.log('subtraction')
        this.value = this.firstNumber - this.secondNumber
        return true
    }

    // perform multiplication operation
    multiply() {
        console.log('multiplication')
        this.value = this.firstNumber * this.secondNumber
        return true
    }

    // perform divide operation
    divide() {
        console.log('division')
        if (this.secondNumber == 0){
            return false
        } else {
        this.value = this.firstNumber/this.secondNumber
        return true
        }
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
