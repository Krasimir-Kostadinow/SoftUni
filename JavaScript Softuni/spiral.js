function spiral(row, col) {
    let totalEl = row * col;
    let counter = 0;
    let matrix = [];
    for (let i = 0; i < col; i++) {
        matrix.push([]);
        for (let j = 0; j < row; j++) {
            matrix[i].push(0);
        }
    }
    let round = 0;
    let i = 0;
    let j = 0;
    while (counter !== totalEl) {
        let isFinish = false;
        for (i = i; i < col; i++) {
            if (counter === totalEl) {
                isFinish = true;
                break;
            }
            counter++;
            matrix[j][i] = counter;
        }
        if (isFinish) {
            break;
        }
        i--;
        j++;
        for (j = j; j < row; j++) {
            counter++;
            matrix[j][i] = counter;
        }
        j--;
        i--;
        for (i = i; i >= round; i--) {
            counter++;
            matrix[j][i] = counter;
        }
        i++;
        j--;
        round++;
        for (j = j; j >= round; j--) {
            counter++;
            matrix[j][i] = counter;
        }
        i = round;
        j = round;
        col--;
        row--;

    }

    matrix.forEach(el => console.log(el.join(' ')));

}
spiral(5, 5);