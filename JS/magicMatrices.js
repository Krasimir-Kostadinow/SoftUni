function magicMtrices(array) {
    let firstArray = [];
    let secondArray = [];
    let threArray = [];
    let sumFirst = 0;
    let sumSecond = 0;
    let sumThre = 0;
    let first = 0;
    let second = 0;
    let thre = 0;
    let result = false;
    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i];

        if (i === 0) {
            firstArray = currentArray;
        } else if (i === 1) {
            secondArray = currentArray;
        } else if (i === 2) {
            threArray = currentArray;
        }
    }
    for (let l = 0; l < firstArray.length; l++) {
        let lEl = firstArray[l];
        sumFirst += lEl;
        if (l === 0) {
            first += lEl;
        } else if (l === 1) {
            second += lEl;
        } else if (l === 2) {
            thre += lEl;
        }
    }

    for (let k = 0; k < secondArray.length; k++) {
        let kEl = secondArray[k];
        sumSecond += kEl;
        if (k === 0) {
            first += kEl;
        } else if (k === 1) {
            second += kEl;
        } else if (k === 2) {
            thre += kEl;
        }
    }
    for (let j = 0; j < threArray.length; j++) {
        let jEl = threArray[j];
        sumThre += jEl;
        if (j === 0) {
            first += jEl;
        } else if (j === 1) {
            second += jEl;
        } else if (j === 2) {
            thre += jEl;
        }
    }
if (sumFirst === sumSecond && sumSecond === sumThre) {
    if (first === second && second === thre) {
        result = true;
    }

}

console.log(result);

}
magicMtrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );