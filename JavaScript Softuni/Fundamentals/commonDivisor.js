function commonDivisor(firstInt, secondInt ) {
    let maxNum = 0;
    if (firstInt >= secondInt) {
        maxNum = firstInt;
    } else {
        maxNum = secondInt;
    }
    for (let i = maxNum; i >= 0; i--) {
        if (firstInt % i === 0 && secondInt % i === 0) {
            console.log(i);
            break
        }
        
    }
    
}
commonDivisor(2154, 458);