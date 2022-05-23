function triangleOfNumbers(n) {
 
    for (let i = 1; i <= n;i++) {
        let printLine = '';
        for (let j = 1;j <= i;j++){
           printLine += i + ' ';
        }
        console.log(printLine);
    }

}
triangleOfNumbers(3)