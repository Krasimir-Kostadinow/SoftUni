function armies(input) {
    let armies = {};
    for (let el of input) {
        let element = el.split(' ');
        let isExistsLider = element.includes('arrives');
        let isDefeated = element.includes('defeated');
        let isExistsPlus = element.includes('+');
        let isExistsFull = el.includes(':')
        if (isExistsLider) {
            let index = element.indexOf('arrives');
            element.splice(index, 1);
            let lider = element.join(' ');
            armies[lider] = [];
        } else if (isDefeated) {
            let index = element.indexOf('defeated');
            element.splice(index, 1);
            let liderDefeated = element.join(' ');
            delete armies[liderDefeated];
        } else if (isExistsPlus) {
            let element = el.split(' + ');
            let army = element[0];
            let count = Number(element[1]);
            for (const lider in armies) {
                armies[lider].forEach(el => {
                    let isExists = el.includes(army);
                    if (isExists) {
                        let index = el.indexOf(army);
                        armies[lider][index][1] += count;
                    }
                });
            }
        } else if (isExistsFull) {
            let element = el.split(': ');
            let lider = element[0];
            let armiesAdd = element[1].split(', ');
            let army = armiesAdd[0];
            let count = Number(armiesAdd[1]);
            let isExists = armies.hasOwnProperty(lider);
            if (isExists) {
                let isExistsArmy = false;
                let index = 0;
                for (let i = 0; i < armies[lider].length; i++) {
                    let el = armies[lider][i];
                    isExistsArmy = el.includes(army)
                    index = i;
                }
                if (isExistsArmy) {
                    armies[lider][index][1] += count;
                } else {
                    armies[lider].push([army, count]);
                }


            }
        }
    }

    for (let lider in armies) {
        armies[lider].sort((a, b) => {
            return b[1] - a[1];
        })
    }

    let sorted = Object.entries(armies);

    sorted.sort((a, b) => {
        let sumLiderA = a[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        let sumLiderB = b[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        return sumLiderB - sumLiderA;
    });

    for (let el of sorted) {
        let lider = el[0];
        let totalCount = el[1].reduce((acc, el) => {
            return acc += el[1];
        }, 0);
        console.log(`${lider}: ${totalCount}`);
        let armies = el[1];
        for (const el of armies) {
            console.log(`>>> ${el[0]} - ${el[1]}`);
        }
    }

}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);