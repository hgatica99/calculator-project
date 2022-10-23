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
            case 'add':  return this.add();
            case 'subtract': return this.subtract();
            case 'multiply': return this.multiply();
            case 'divide': return this.divide();
        }
    }

    // perform addition operation
    add() {
        console.log('a')
        this.value = this.firstNumber + this.secondNumber
        return true
    }
    
    // perform subtraction operation
    subtract() {
        console.log('s')
        this.value = this.firstNumber - this.secondNumber
        return true
    }

    // perform multiplication operation
    multiply() {
        console.log('m')
        this.value = this.firstNumber * this.secondNumber
        return true
    }

    // perform divide operation
    divide() {
        console.log('d')
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
