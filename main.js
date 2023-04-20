console.log('test');

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-eqals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
}



clear() {
  this.currentOperandTextElement = ' '
  this.previousOperandTextElement = ' '
  this.operation = undefined
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay
  })
})
delete() {
}

appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.tostring() + number.toString()
}

chooseOperation(operation) {
  
}

compute() {
}

updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperandTextElement
}
