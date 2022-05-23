function printDna(number) {
    let sequence = 'ATCGTTAGGG';
    let row = ['*', '*', '*', '*', '*', '*'];
    let params = 1;
    function symbol(params) {
        let result = [];
        for (let j = 0; j < sequence.length; j++) {
            let element = sequence[j++];
            let nextElement = sequence[j];
            if (j === params) {
                result = [element, nextElement];
                break;
            }
        } return result;
    }
    let helix = 2;
    let nextHelix = 3;

    let left = true;
    let right = false;
    for (let j = 1; j <= number; j++) {
        let array = symbol(params);
        params += 2;
        if (sequence.length < params) {
            params = 1;
        }

        row[helix] = array[0];
        row[nextHelix] = array[1];

        console.log(row.join(''));
        if (helix === 0 && left === true) {
            row[helix] = '*';
            row[nextHelix] = '*';
        } 
        else if (right === true && helix === 2) {
            row[helix] = '-';
            row[nextHelix] = '-'; 
        }
        else if (right === true && helix !== 0) {
            row[helix] = '*';
            row[nextHelix] = '*'; 
        }
        else {
            row[helix] = '-';
            row[nextHelix] = '-';
        }


        if (helix === 0 && left === true) {
            left = false;
            right = true;
        } else if (helix === 2 && left === false) {
            left = true;
            right = false;
        }
        if (left) {
            helix--;
            nextHelix++;
        } else if (right) {
            helix++;
            nextHelix--;
        }

    }
}
printDna(21);