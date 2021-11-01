function solve(input) {

    let armies = {};


    for (const el of input) {

        if (el.includes('arrives')) {
            let arrEl = el.split(' ');
            arrEl.pop();
            let liderName = arrEl.join(' ');
            armies[liderName] = {};

        } else if (el.includes(':')) {
            let arrEl = el.split(': ');  
            let liderName = arrEl[0];
            let liderArmy = arrEl[1].split(', ');
            let armyName = liderArmy[0];
            let count = Number(liderArmy[1]);
            if (armies.hasOwnProperty(liderName)) {
                armies[liderName][armyName] = count;
            }

        } else if (el.includes(' + ')) {
            let arrEl = el.split(' + ');
            let armyName = arrEl[0];
            let count = Number(arrEl[1]);

            for (const liderName in armies) {
                let isExists = armies[liderName].hasOwnProperty(armyName);
                if (isExists) {
                    armies[liderName][armyName] += count;
                }
            }
        } else if (el.includes('defeated')) {
            let arrEl = el.split(' ');
            arrEl.pop();
            let liderName = arrEl.join(' ');
            delete armies[liderName];
        }

    }
    for (const lider in armies) {
        armies[lider] = Object.entries(armies[lider]);
        armies[lider].sort((a, b) => {
            return b[1] - a[1];
        });
    }

    let sorted = Object.entries(armies);
    sorted.sort((a, b) => {
        let sumA = a[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        let sumB = b[1].reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0);
        return sumB - sumA;
    })

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
solve(  ['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);