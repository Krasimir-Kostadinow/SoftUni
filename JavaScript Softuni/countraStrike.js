function counterStrike(input) {

    let energy = Number(input.shift());
    let isEmptyEnergy = false;
    let count = 0
    let i = 0;
    while (input[i] !== 'End of battle') {
        let battle = Number(input[i]);

        if (energy < battle) {
            isEmptyEnergy = true;
            break;
        }
        energy -= battle;
        count++;
        if (count % 3 === 0) {
            energy += count;
        }
    
     
        i++;
    }
    if (isEmptyEnergy) {
        console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }

}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
;


