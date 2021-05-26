function specialNumber(num) {

    for (let i = 1; i <= num; i++) {
        let currentNum = i + '';
        let sum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let current = Number(currentNum[j]);
            sum += current;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
    }
}
specialNumber(15);