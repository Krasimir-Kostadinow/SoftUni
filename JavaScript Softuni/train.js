function train(array) {

    let wagons = array.shift().split(' ').map(x => Number(x));
    let maxCapacity = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        let command = array[i].split(' ');
        if (command.length > 1) {
            wagons.push(Number(command[1]));
        } else {
            let number = Number(command[0])
            wagons.map(a => {
                if (a + number <= maxCapacity) {
                    return a + number;
                }
                return a;
            });
        }
    }



    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);