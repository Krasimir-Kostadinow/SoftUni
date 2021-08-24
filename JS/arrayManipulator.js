function arrayManipulator(array, commands) {
    let newArray = array.slice(0);
    function commandExecutor(input) {

        switch (input[0]) {
            case 'add':
                newArray.splice(Number(input[1]), 0, Number(input[2]));
                break;
            case 'addMany':
                let ix = Number(input[1]);
                let add = input.slice(2);
                let numAdd = add.map(el => Number(el))
                newArray.splice(ix, 0, numAdd);
                newArray = newArray.flat();
                break;
            case 'contains':
                let index = newArray.indexOf(Number(input[1]));
                console.log(index);
                break;
            case 'remove':
                newArray.splice(input[1], 1);
                break;
            case 'shift':
                let slice = newArray.splice(0, input[1]);
                newArray.push(slice);
                newArray = newArray.flat();
                break;
            case 'sumPairs':
                let bufer = [];
                while (newArray.length !== 0) {
                    let sumPairs = 0;
                    if (newArray.length !== 1) {
                        sumPairs = newArray.shift() + newArray.shift();
                    } else {
                        sumPairs = newArray.shift();
                    }
                    bufer.push(sumPairs);
                }
                newArray = bufer.slice(0);
                break;
        }

    }
    let i = 0;
    while (commands[i] !== 'print') {
        let command = commands[i].split(' ');

        commandExecutor(command);
        i++;
    }
 
   
     return `[ ${newArray.join(', ')} ]` ;
}
console.log(arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains -3', 'print']
    ));