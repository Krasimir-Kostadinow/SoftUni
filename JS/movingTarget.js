function movingTarget(input) {
    let targets = input.shift().split(' ').map(el => Number(el));


    function shoot(targets, index, value) {
        if (index < targets.length && index >= 0) {
            if (targets[index] - value <= 0) {
                targets.splice(index, 1);
            } else {
                targets[index] -= value;
            }
        }
    }
    function strike(targets, index, radius) {
        if (index < targets.length && index >= 0) {
            if (index + radius < targets.length && index + radius >= 0) {
                if (index - radius < targets.length && index - radius >= 0) {
                    let deleteTarget = targets.slice(index - radius, (index + radius)+1);
                    targets.splice(index - radius, deleteTarget.length);

                } else {
                    console.log('Strike missed!');
                }
            } else {
                console.log('Strike missed!');
            }
        } else {
            console.log('Strike missed!');
        }
    }
    function add(targets, index, value) {
        if (index < targets.length && index >= 0) {
            targets.splice(index, 0, value);
        } else {
            console.log('Invalid placement!');
        }
    }
    let i = 0;
    while (input[i] !== 'End') {
        let current = input[i].split(' ');
        let command = current[0];
        let index = Number(current[1]);
        let value = Number(current[2]);
        if (command === 'Shoot') {
            shoot(targets, index, value);
        } else if (command === 'Strike') {
            strike(targets, index, value);
        } else if (command === 'Add') {
            add(targets, index, value);
        }
        i++;
    }

    console.log(targets.join('|'));
}
movingTarget(["1 2 3 4 5",
"Strike 1 1",
"End"])

;