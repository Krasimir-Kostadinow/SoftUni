function convertFromBinaryToDecimal(binaryNumber) {
    let sum = 0;
    let strNumber = binaryNumber + '';
    for (let i = 0; i < strNumber.length; i++) {
        let num = Number(strNumber[i]);
        sum += Math.pow(num * 2, strNumber.length-1 - i);
    }
console.log(sum);
}
convertFromBinaryToDecimal(101);