function treasurHunt(input) {
    let chest = input.shift().split('|');
    let i = 0;
    while (input[i] !== 'Yohoho!') {
        let current = input[i].split(' ');
        let command = current.shift();

        switch (command) {
            case 'Loot':
                for (let j = 0; j < current.length; j++) {
                    let loot = current[j];
                    let index = chest.indexOf(loot);
                    if (index < 0) {
                        chest.unshift(loot);
                    }
                }
                break;
            case 'Drop':
                let indexLoot = Number(current[0]);
                if (indexLoot >= 0 && indexLoot < chest.length) {
                    let del = chest.splice(indexLoot, 1);
                    chest.push(...del);
                }
                break;
            case 'Steal':
                let numDel = Number(current[0]);
                let stealedTresure = chest.slice(-numDel);
                chest.splice(-numDel);
                console.log(stealedTresure.join(', '));
                break;
        }

        i++;
    }

    if (chest.length > 0) {
        let sum = chest.reduce((acc, el) => {
            acc += el.length;
            return acc;
        }, 0);
        let average = sum / chest.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }


}
// function tresureHunt(array) {
//     let initialTresure = array.shift().split('|');
//     let total = 0;
//     let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

//     for (const line of array) {
//         let [command, ...elements] = line.split(' ');

//         if (command === 'Yohoho!') {
//             break;
//         }

//         if (command === 'Loot') {
//             for (const item of elements) {
//                 if (!initialTresure.includes(item)) {
//                     initialTresure.unshift(item);
//                 }
//             }
//         } else if (command === 'Drop') {
//             let index = Number(elements[0]);
//             if (isIndexValid(index, initialTresure)) {
//                 let dropped = initialTresure.splice(index, 1);
//                 initialTresure.push(...dropped);
//             }
//         } else if (command === 'Steal') {
//             let index = Number(elements[0]);
//             let stealedTresure = initialTresure.slice(-index);
//             initialTresure.splice(-index);
//             console.log(stealedTresure.join(', '));
//         }
//     }
//     total = initialTresure
//         .reduce((sum, initialTresure) => sum + initialTresure.length, 0) / initialTresure.length;

//     if (initialTresure.length > 0) {
//         return `Average treasure gain: ${total.toFixed(2)} pirate credits.`
//     } else {
//         return "Failed treasure hunt."
//     }
// }
treasurHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
    ;