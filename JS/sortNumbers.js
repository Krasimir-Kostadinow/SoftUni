function sortNumbers(n1, n2, n3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;
    let middleNum = 0;
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
    if (n1 > minNum && n1 < maxNum) {
        middleNum = n1;
    } 
    if (n2 > minNum && n2 < maxNum) {
        middleNum = n2;
    } 
    if (n3 > minNum && n3 < maxNum) {
        middleNum = n3;
    }
    console.log(maxNum);
    console.log(middleNum);
    console.log(minNum);
}
sortNumbers(-2, 5, 7);