function ladybugs(array) {

    let sizeField = Number(array[0]);
    let arrayCell = [];
    for (let k = 0; k < sizeField; k++) {
        arrayCell.push(0);

    }
    let indexLadybugs = array[1].split(' ');
    for (let i = 0; i < indexLadybugs.length; i++) {
        let positionLadybug = Number(indexLadybugs[i++]);

        let nextPositionLadybug = Number(indexLadybugs[i]);


        for (let j = 2; j < array.length; j++) {
            let commands = array[j];
            let command = commands.split(' ');
            let startIndex = Number(command[0]);
            let direction = command[1];
            let flyLength = Number(command[2]);


            if (startIndex === positionLadybug) {
                if (direction === 'right') {
                    positionLadybug += flyLength;
                    if (positionLadybug === nextPositionLadybug) {
                        positionLadybug += 1;
                    }
                } else if (direction === 'left') {
                    positionLadybug -= flyLength;
                    if (positionLadybug === nextPositionLadybug) {
                        positionLadybug += 1;
                    }
                }

            }

        }
        i--;
        if (positionLadybug < arrayCell.length && positionLadybug >= 0) {
            arrayCell[positionLadybug] = 1
        }
    }
    let result = arrayCell.join(' ');
    console.log(result);
}
ladybugs([5, '4',
    '3 left 2',
    '1 left -2']
);