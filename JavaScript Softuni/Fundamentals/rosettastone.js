function risettaStone(input) {
    let lengthOfTemplate = Number(input.shift());
    let templateMatrix = createOfTemplate(input, lengthOfTemplate);
    function createOfTemplate(array, rowTemplate) {
        let result = [];
        for (let i = 0; i < rowTemplate; i++) {
            let currentRow = array.shift().split(' ').map(x => Number(x));
            result.push(currentRow);

        }
        return result;
    }

    let gut = input.slice(0);
    let matrix = gut.map(x => x.split(' ').map(x => Number(x)));

    function modificationMatrix(matrix, templateMatrix) {
        let isFlag = true;
        let isStart = false;
        let r = 0;
        let c = 0;
        while (isFlag) {

            for (let row = 0; row < templateMatrix.length; row++) {
                for (let col = 0; col < templateMatrix[row].length; col++) {
                    let rowMatrix = row + r;
                    let colMatrix = col + c;
                    if (colMatrix === matrix[0].length) {
                        isStart = true;
                        break;
                    } else if (rowMatrix === matrix.length) {
                        break;
                    }
                    matrix[rowMatrix][colMatrix] += templateMatrix[row][col];

                    if (rowMatrix === matrix.length - 1 && colMatrix === matrix[0].length - 1) {
                        isFlag = false;
                    }

                }
            }
            c += templateMatrix[lengthOfTemplate - 1].length;
            if (isStart) {
                c = 0;
                r += lengthOfTemplate;
                isStart = false;
            }
        }
        return matrix;
    }
    let newMatrix = modificationMatrix(matrix, templateMatrix, lengthOfTemplate);


    function translateNumber(array) {
        for (let row = 0; row < array.length; row++) {
            for (let col = 0; col < array[row].length; col++) {
                let element = array[row][col];
                let residue = element % 27;
                if (residue === 0) {
                    array[row][col] = ' ';
                }
                else {
                    let letter = String.fromCharCode(64 + residue);
                    array[row][col] = letter;
                }
            }
        }
        return array;
    }
    let result = translateNumber(newMatrix);
    let finish = result.map(x => x.join(''));
    console.log(finish.join(''));
    // function concat(array) {
    //     let result = '';
    //     for (let row = 0; row < array.length; row++) {
    //         for (let col = 0; col < array[row].length; col++) {
    //             let letter = array[row][col];
    //             result += letter;
    //         }
    //     }
    //     return result;
    // }
    // let finish = concat(result);

    // console.log(finish);
}
risettaStone(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);





