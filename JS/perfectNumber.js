function perfectNumber(num) {
    let isFlag = true;
    let result = 0;
    let start = num;
    while (result <= num) {
        let digit = Math.ceil(start / 2);
        if (digit % 2 === 0 || digit % 1 === 0) {
            result += digit;
            if (result === num) {
                isFlag = false;
                console.log('We have a perfect number!');
                break;
            }
        }
        start = digit;

    }
    if (isFlag) {
        console.log("It's not so perfect.");
    }


}
perfectNumber(28);