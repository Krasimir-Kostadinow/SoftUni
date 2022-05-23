function war(input) {

    function sunken(arr) {
        let isLost = false;
        for (const el of arr) {
            if (el <= 0) {
                isLost = true;
                break;
            }
        }
        return isLost;
    }
    function validIndex(index, arr) {
        let isValid = false;
        if (index >= 0 && index < arr.length) {
            isValid = true;
        }
        return isValid;
    }
    let pirateShip = input.shift().split('>').map(el => Number(el));
    let warShip = input.shift().split('>').map(el => Number(el));
    let maxHealth = Number(input.shift());
    let pirateLost = false;
    let warLost = false;
    let isFlag = false;

    let i = 0;
    while (input[i] !== 'Retire') {

        if (isFlag) {
            break;
        }
    
        let currentWar = input[i].split(' ');
        let command = currentWar[0];

        switch (command) {
            case 'Fire':
                let index = Number(currentWar[1]);
                if (validIndex(index, warShip)) {
                    let damage = Number(currentWar[2]);
                    warShip[index] -= damage;
                    pirateLost = sunken(pirateShip);
                    warLost = sunken(warShip);
                    if (pirateLost || warLost) {
                        isFlag = true;
                        break;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(currentWar[1]);
                let endIndex = Number(currentWar[2]);
                if (validIndex(startIndex, pirateShip) && validIndex(endIndex, pirateShip)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= Number(currentWar[3]);
                        pirateLost = sunken(pirateShip);
                        warLost = sunken(warShip);
                        if (pirateLost || warLost) {
                            isFlag = true;
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                let indexRepair = Number(currentWar[1]);
                if (validIndex(indexRepair, pirateShip)) {
                    pirateShip[indexRepair] += Number(currentWar[2]);
                    if (pirateShip[indexRepair] > maxHealth) {
                        pirateShip[indexRepair] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let count = 0;
                for (const health of pirateShip) {
                    let minHealth = maxHealth * 0.2;
                    if (health < minHealth) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
        i++;
    }

    let pirateShipSum = pirateShip.reduce((acc, el) => {
        acc += el;
        return acc;
    }, 0);
    let warShipSum = warShip.reduce((acc, el) => {
        acc += el;
        return acc;
    }, 0);

    if (pirateLost) {
        console.log('You lost! The pirate ship has sunken.');
    } else if (warLost) {
        console.log('You won! The enemy ship has sunken.');
    } else {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }

}
war(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
;