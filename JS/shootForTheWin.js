function shootForTheWin(input) {

    function modiferTargets(targets, index) {
        let hitTarget = targets[index];
        targets[index] = -1;
        for (let i = 0; i < targets.length; i++) {
            let target = targets[i];
            if (target !== -1) {
                if (hitTarget < target) {
                    targets[i] -= hitTarget;
                } else {
                    targets[i] += hitTarget;
                }
            }

        }

    }


    let targets = input.shift().split(' ').map(el => Number(el));
    let shot = 0;
    let i = 0;
    while (input[i] !== 'End') {
        let currentIndex = Number(input[i]);
        if (currentIndex < targets.length && currentIndex >= 0) {
            modiferTargets(targets, currentIndex);
            shot++;
        }

        i++;
    }

    console.log(`Shot targets: ${shot} -> ${targets.join(' ')}`);

}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
;