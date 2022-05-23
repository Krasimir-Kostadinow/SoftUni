function memoryGame(input) {
    let sequenceOfNum = input.shift().split(' ');
    let counterMoves = 0;
    let i = 0;
    while (input[i] !== "end") {
        let currentEl = input[i];
        counterMoves++;
        let isValid = true;
        let integer = currentEl.split(' ').map(el => Number(el));
        let indexNull = integer[0];
        let indexOne = integer[1];

        if (indexNull < 0 || indexNull > sequenceOfNum.length - 1 || indexOne < 0 || indexOne > sequenceOfNum.length - 1 || indexNull === indexOne) {
            let newElement = (`-${counterMoves}a`);
            let middle = Math.trunc(sequenceOfNum.length / 2);
            sequenceOfNum.splice(middle, 0, newElement);
            sequenceOfNum.splice(middle, 0, newElement);
            console.log('Invalid input! Adding additional elements to the board');
            isValid = false;
        }

        if (isValid) {

            if (sequenceOfNum[indexNull] === sequenceOfNum[indexOne]) {
                console.log(`Congrats! You have found matching elements - ${sequenceOfNum[indexNull]}!`);
                if (indexNull > indexOne) {
                    sequenceOfNum.splice(indexNull, 1);
                    sequenceOfNum.splice(indexOne, 1);
                } else {
                    sequenceOfNum.splice(indexOne, 1);
                    sequenceOfNum.splice(indexNull, 1);
                  
                }

            } else {
                console.log('Try again!');
            }

        }
        if (sequenceOfNum.length === 0) {
            break;
        }

        i++;
    }

    if (sequenceOfNum.length > 0) {
        console.log('Sorry you lose :(');
        console.log(`${sequenceOfNum.join(' ')}`);
    } else {
        console.log(`You have won in ${counterMoves} turns!`);
    }



}
memoryGame(
  
    [
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ]
        
);