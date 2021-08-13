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
        }

        return result;
    }
    let counter = 0;
    for (let j = 1; j <= number; j++) {

        let array = symbol(params);
        params += 2;



        let helix = 2 - counter;
        let nextHelix = 3 + counter;

        let isFlag = true;
        if (helix <= 0) {
            counter = 2;
            isFlag = false;
        }

        row[helix] = array[0];
        row[nextHelix] = array[1];



        if (isFlag) {
            counter++;
        } else {
            counter--;
        }

        console.log(row.join(''));
        row[helix] = '-';
        row[nextHelix] = '-';

    }


}
printDna(10);