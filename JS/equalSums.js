function equalSums(array) {
    let isEqual = false;
    let indexEqual = 0;
    for (let i = 0; i < array.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = i + 1; j < array.length; j++) {
            sumRight += array[j];

        }
        for (let k = i - 1; k >= 0; k--) {
            sumLeft += array[k];

        }
        if (sumLeft === sumRight) {
            indexEqual = i;
            isEqual = true;
            break;
        }
    }
    if (isEqual) {
        console.log(indexEqual);
    } else {
        console.log('no');
    }
}
equalSums([1]);