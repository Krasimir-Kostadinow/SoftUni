function spiralMatrix(row, col) {
    let totalElement = row * col;
    let matrix = [];
    let arr = [];
    let counter = 2;
    for (let i = 1; i <= totalElement; i++) {
        if (i < col) {
            arr.push(i);
        } else if (i === col) {
            arr.push(i);
            matrix.push(arr);
            arr = [];
        } else if (i > matrix[0].length && row > i / 2) {
            arr[col - 1] = i;
            matrix.push(arr);
            arr = [];
        } else if (i >= col + row && i <  col + row + (col - 1)) {
                matrix[matrix.length - 1][matrix[matrix.length - 1].length - counter] = i;
                counter++;
        } else if (i >= col + row + col-1) {

        }
    }

    console.log(matrix);
}
spiralMatrix(4, 3);