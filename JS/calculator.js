function calculator(num1, operation, num2) {
    let result = 0;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        result = num1 / num2;
    }

console.log(result.toFixed(2));

}
calculator(25.5, '-', 3);