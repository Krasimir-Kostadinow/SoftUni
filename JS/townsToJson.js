function townsToJson(input) {
    let table = input.slice();
    let towns = [];
    let [empty, Town, Latitude, Logitude, secondEmpty] = (` ${table.shift()} `).split(' | ');

    for (let el of table) {
        let rowTable = (` ${el} `).split(' | ');
        let town = rowTable[1];
        let latitude = Number(rowTable[2]).toFixed(2);
        let longitude = Number(rowTable[3]).toFixed(2);
        let object = {};
        object[Town] = town;
        object[Latitude] = Number(latitude);
        object[Logitude] = Number(longitude);
      
        towns.push(object);
    }
    return JSON.stringify(towns)
}
console.log(townsToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
    ]
    ));

