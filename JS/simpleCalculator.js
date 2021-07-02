function simpleCalculator(numOne, numTwo, operator) {
    const multipy = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    if (operator === 'multiply') {
        return multipy(numOne, numTwo);
    } else if (operator === 'divide') {
        return divide(numOne, numTwo);
    } else if (operator === 'add') {
        return add(numOne, numTwo);
    } else if (operator === 'subtract') {
        return subtract(numOne, numTwo);
    }

}
let result = simpleCalculator(50, 13, 'subtract');
console.log(result);

