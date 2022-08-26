function sameNumbers(input) {
    let sum = 0;
    let isSame = true;
    let strNum = input.toString();
    for (let i = 0; i < strNum.length; i++) {
        let num = Number(strNum[i++]);
        let nextNum = Number(strNum[i--]);
        sum += num;
        let isCheck = true;
        if (num !== nextNum && isCheck && strNum.length-1 > i) {
            isCheck = false;
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

}
sameNumbers(11111);