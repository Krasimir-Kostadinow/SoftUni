function primeNumberChecker (num) {
   
    if (num % 1 === 0 && num % num === 0 && num % 2 === 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}
primeNumberChecker(12);