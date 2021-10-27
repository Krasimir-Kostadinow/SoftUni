function armies(input) {
    let armies = {};
    for (let el of input) {
        let element = el.split(' ');
        let isExistsLider = element.includes('arrives');
        let isDefeated = element.includes('defeated');
        let isExistsPlus = element.includes('+');
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
        } else {
            let element = el.split(': ');
            let lider = element[0];
            let armiesAdd = element[1].split(', ');
            let army = armiesAdd[0];
            let count = Number(armiesAdd[1]);
            let isExists = armies.hasOwnProperty(lider);
            if (isExists) {
                armies[lider].push([army, count]);
            }
        }
    }
    console.log(armies);

}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);