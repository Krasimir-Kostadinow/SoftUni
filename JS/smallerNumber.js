function smallestOThreNumbers(a, b, c) {

    let smallestNum;

    if (a <= b && a <= c) {
        smallestNum = a;
    } else if (b <= a && b <= c) {
        smallestNum = b;
    } else if (c <= a && c <= b) {
        smallestNum = c;
    }
    console.log(smallestNum);

}
smallestOThreNumbers(2, 2, 3);