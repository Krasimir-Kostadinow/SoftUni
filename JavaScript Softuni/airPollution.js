function airPollution(maps, pollution) {

    let matrix = maps.map(el => el.split(' ').map(el => Number(el)));
    let mapp = matrix.slice(0);
    let typePollution = pollution.map(x => x.split(' '));
    let lengthTypePollution = typePollution.length
    for (let i = 0; i < lengthTypePollution; i++) {
        let air = typePollution.shift();
        let airType = air[0];
        let num = Number(air[1]);
        function breeze(array, index) {
            for (let row = 0; row < array.length; row++) {
                for (let col = 0; col < array.length; col++) {
                    if (row === index) {
                        if (array[row][col] - 15 > 0) {
                            array[row][col] -= 15;
                        } else {
                            array[row][col] = 0;
                        }
                    }
                }
            }
            return array;
        }
        function gale(array, index) {
            for (let row = 0; row < array.length; row++) {
                for (let col = 0; col < array.length; col++) {
                    if (col === index) {
                        if (array[row][col] - 20 > 0) {
                            array[row][col] -= 20;
                        } else {
                            array[row][col] = 0;
                        }
                    }
                }
            }
            return array;
        }
        function smog(array, value) {
            let result = array.map(x => x.map(x => x + value));
            return result;
        }
        switch (airType) {
            case 'breeze':
                mapp = breeze(mapp, num);
                break;
            case 'gale':
                mapp = gale(mapp, num);
                break;
            case 'smog':
                mapp = smog(mapp, num);
                break;

        }
    }

    let pollutionAreas = [];
    for (let row = 0; row < mapp.length; row++) {
        for (let col = 0; col < mapp.length; col++) {
            if (mapp[row][col] >= 50) {
                let area = `[${row}-${col}]`
                pollutionAreas.push(area);
            }
        }
    }

    if (pollutionAreas.length > 0) {
        console.log(`Polluted areas: ${pollutionAreas.join(', ')}`);
    }
    else {
        console.log('No polluted areas');
    }

}
airPollution(["5 7 2 14 4",
"21 14 2 5 3",
"3 16 7 42 12",
"2 20 8 39 14",
"7 34 1 10 24"],
["breeze 1", "gale 2", "smog 35"]
);