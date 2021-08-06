function factorialRecursion(num) {
    if (num === 1) {
        return 1;
    }

    let result = num * factorialRecursion(num - 1);
    return result;
}
factorialRecursion(5);
console.log(factorialRecursion(5));