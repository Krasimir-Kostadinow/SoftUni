function sumDigits(num) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let currentNum = Number(str[i]);
        sum += currentNum;
    }
console.log(sum);
}
sumDigits(12);