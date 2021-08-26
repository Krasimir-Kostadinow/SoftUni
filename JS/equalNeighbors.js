function equalNeighbors(matrix) {

    let input = matrix.slice(0);
    let counter = 0;

    while (input.length !== 0) {
        let firstArray = input.shift();
        let secondArray = input[0];

        for (let i = 0; i < firstArray.length; i++) {
            let element = firstArray[i++];
            let equal = false;
            if (secondArray !== undefined) {
                equal = secondArray.includes(element);
            }

            if (equal) {
                for (let j = 0; j < secondArray.length; j++) {
                    let el = secondArray[j];
                    if (el === element && j === i - 1) {
                        counter++;
                    }
                }
            }
            if (firstArray.length === i) {
                break;
            }
            let nextElement = firstArray[i];
            if (element === nextElement) {
                counter++;
            }
            i--;

        }



    }
    return counter;

}
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

));
