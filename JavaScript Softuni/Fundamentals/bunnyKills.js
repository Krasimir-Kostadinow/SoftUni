function bunnyKills(matrix) {
    let coordinates = matrix.pop().split(' ').map(el => el.split(',').map(x => Number(x)));
    let matrixArray = matrix.map(el => el.split(' ').map(el => Number(el)));
    let killBunny = 0;
    let damege = 0;
    function bombScope(indexRow, indexCol) {
        let startRow = indexRow - 1;
        if (startRow < 0) {
            startRow = 0;
        }
        else if (startRow === matrixArray.length) {
            startRow = indexRow;
        }

        let endRow = indexRow + 1;
        if (endRow < 0) {
            endRow = 0;
        }
        else if (endRow === matrixArray.length) {
            endRow = indexRow;
        }

        let startCol = indexCol - 1;
        if (startCol < 0) {
            startCol = 0;
        }
        else if (startCol === matrixArray.length) {
            startCol = indexRow;
        }

        let endCol = indexCol + 1;
        if (endCol < 0) {
            endCol = 0;
        }
        else if (endCol === matrixArray.length) {
            endCol = indexCol;
        }

        let range = [startRow, endRow, startCol, endCol];
        return range;
    }
    let bombRange;
    function bombAttack(bombRange, matrixArray) {
        let startRow = bombRange[0];
        let endRow = bombRange[1];
        let startCol = bombRange[2];
        let endCol = bombRange[3];
        for (let j = startRow; j <= endRow; j++) {
            for (let z = startCol; z <= endCol; z++) {
                matrixArray[j][z] -= valueBomb;

            }
        }
        return matrixArray;
    }
    for (let i = 0; i < coordinates.length; i++) {

        let indexRow = coordinates[i][0];
        let indexCol = coordinates[i][1];

  

        let valueBomb = matrixArray[indexRow][indexCol];
        if (valueBomb <= 0) {
            continue;
        }
        killBunny++;
        damege += valueBomb;


        bombRange = bombScope(indexRow, indexCol);


    }
    let newMatrix = bombAttack(bombRange, matrixArray);
    for (let k = 0; k < newMatrix.length; k++) {
        for (let h = 0; h < newMatrix.length; h++) {
            let element = newMatrix[k][h];
            if (element > 0) {
                killBunny++;
                damege += element;
            }

        }

    }
    console.log(damege);
    console.log(killBunny);

}
bunnyKills(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
);