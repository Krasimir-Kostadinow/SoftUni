function validityChecker(x1, y1, x2, y2) {

    function calculate(x1, y1, x2, y2) {
        let valid = '';
        let value = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
        if (Number.isInteger(value)) {
            valid = 'valid';
        } else {
            valid = 'invalid';
        }
       return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid}`;
    }
console.log(calculate(x1, y1, 0, 0));
console.log(calculate(x2, y2, 0, 0));
console.log(calculate(x1, y1, x2, y2));

}
validityChecker(4, 0, 0, 3);