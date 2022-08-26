function diagonalSums(matrix) {
    let mainSum = 0;
    let secundarSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        mainSum += element[i];
        secundarSum += element[(element.length - 1) - i];
    }
    return (`${mainSum} ${secundarSum}`);

}
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
    )); 