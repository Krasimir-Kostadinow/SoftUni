function sortNumbers(n1, n2, n3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;
    let secondNum = 0;

    if (n1 >= maxNum) {
        maxNum = n1;
    }
    if (n2 >= maxNum) {
        maxNum = n2
    }
    if (n3 >= maxNum) {
        maxNum = n3;
    }


    if (n1 <= minNum) {
        minNum = n1;
    }
    if (n2 <= minNum) {
        minNum = n2
    }
    if (n3 <= minNum) {
        minNum = n3;
    }

    
    if (n1 === maxNum) {
        secondMum = n1;
    }
    if (n2 === maxNum) {
        secondNum = n2
    }
    if (n3 === maxNum) {
        secondNum = n3;
    }

    if (n1 === minNum) {
        secondMum = n1;
    }
    if (n2 === minNum) {
        secondNum = n2
    }
    if (n3 === minNum) {
        secondNum = n3;
    }

    if (n1 > minNum && n1 < maxNum) {
        secondNum = n1;
    }
    if (n2 > minNum && n2 < maxNum) {
        secondNum = n2;
    }
    if (n3 > minNum && n3 < maxNum) {
        secondNum = n3;
    }

    console.log(maxNum);
    console.log(secondNum);
    console.log(minNum);
}
sortNumbers(-2, 3, 1);