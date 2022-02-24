function orbit(input) {
    let row = input[0];
    let col = input[1];
    let x = input[2];
    let y = input[3];
    let matrix = [];
    
    for (let i = 0; i < col; i++) {
        matrix.push([]);
        for (let j = 0; j < row; j++) {
            matrix[i].push(undefined);
        }
    }


    for (let col = 0; col < matrix.length; col++) {
        for (let row = 0; row < matrix[col].length; row++) {
            matrix[row][col] = Math.max(Math.abs(x - row),Math.abs(y - col)) + 1
        }
    }

for (let i = 0; i < matrix.length; i++) {
console.log(matrix[i].join(' '));
    
}


}
orbit([3, 3, 2, 2]);