function factorialDivision(firstNum, secondNum) {

    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
let devision = factorial(firstNum) / factorial(secondNum);
console.log(devision.toFixed(2));
}
factorialDivision(6, 2);