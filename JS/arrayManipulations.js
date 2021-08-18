function arrayManipulations(input) {

    let array = input.shift().split(' ').map(Number);
   

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(' ');
function commands(currentCommand) {
    let command = '';
    let firstNumberCommand = 0;
    let secondNumberCommand = 0;
    for (let j = 0; j < currentCommand.length; j++) {
        let element = currentCommand[j];
        if (j === 0) {
            command = element;
        } else if (j === 1) {
            firstNumberCommand = Number(element);
        } else if (j === 2) {
            secondNumberCommand = Number(element);
        }
    }
    let result = [command, firstNumberCommand, secondNumberCommand];
    return result;
}
    let commandArray = commands(currentCommand);
    let command = commandArray[0];
    let firstNumberCommand = commandArray[1];
    let secondNumberCommand = commandArray[2];
    
        switch (command) {
            case 'Add':
                array.push(firstNumberCommand);
                break;
            case 'Remove':
                for (let z = 0; z < array.length; z++) {
                    let element = array[z];
                    if (element === firstNumberCommand) {
                        let gutOut = array.splice(z, 1);
                    }
                }
                break;
            case 'RemoveAt':
                let gutOut = array.splice(firstNumberCommand, 1);
                break;
            case 'Insert':
                array.splice(secondNumberCommand, 0, firstNumberCommand);
                break;
        }


    }

    console.log(array.join(' '));

}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);