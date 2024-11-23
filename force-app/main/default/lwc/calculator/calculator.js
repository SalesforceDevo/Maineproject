import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber = 0;
    secondNumber = 0;
    additionResult = 0;
    subtractionResult = 0;

    // Handles input change for the first number
    handleFirstNumberChange(event) {
        this.firstNumber = parseFloat(event.target.value);
    }

    // Handles input change for the second number
    handleSecondNumberChange(event) {
        this.secondNumber = parseFloat(event.target.value);
    }

    // Adds the two numbers
    add() {
        this.additionResult = this.firstNumber + this.secondNumber;
    }

    // Subtracts the two numbers
    subtract() {
        this.subtractionResult = this.firstNumber - this.secondNumber;
    }
}
