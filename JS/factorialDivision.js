function factorialDivision(firstNum, secondNum) {

    function factorialRecursion(num) {

        let result = num * factorialTRecursion(num - 1);
        return result;
    }
    let devision = factorialRecursion(firstNum) / factorialRecursion(secondNum);
    console.log(devision.toFixed(2));
}
factorialDivision(6, 2);