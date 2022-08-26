function equalNeighbor(matrix) {
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {

        let firstArr = matrix[i++];
        let secondArr = matrix[i--];
        if (secondArr === undefined) {
            for (let j = 0; j < firstArr.length; j++) {  
                if (firstArr[j] === firstArr[j + 1]) {
                    counter++;
                }
            }
            break;
        }
        for (let j = 0; j < firstArr.length; j++) {
            let firstEl = firstArr[j];
            let secondEl = secondArr[j];

            if (firstEl === secondEl) {
                counter++;
            }
            if (firstArr[j] === firstArr[j + 1]) {
                counter++;
            }

        }

    }
    console.log(counter);

}
equalNeighbor([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);