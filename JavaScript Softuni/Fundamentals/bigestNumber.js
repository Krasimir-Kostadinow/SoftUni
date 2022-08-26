function bigestNumber(num1, num2, num3) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    if (num1 >= maxNumber) {
        maxNumber = num1;
    } 
    if (num2 >= maxNumber) {
        maxNumber = num2;
    } 
    if (num3 >= maxNumber) {
        maxNumber = num3;
    }
    console.log(maxNumber);
}
bigestNumber(43,
    43.2,
    43.1    
);