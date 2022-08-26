function cardGame(input) {
    let map = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
    function calculateValue(deckSet, map) {
        let valueDeck = 0;
        for (let el of deckSet) {
            let card = el.split('');

            let type = card.pop();
            let power = card.join('');
   
            let isExistsPower = map.hasOwnProperty(power);
            let isExistsType = map.hasOwnProperty(type);
            if (isExistsPower) {
                power = map[power];
            }
            if (isExistsType) {
                type = map[type];
            }
            let value = power * type;
            valueDeck += value;
        }
        return valueDeck;
    }
    function createObject(input) {
        let objPlayers = {};
        for (const player of input) {
            let [name, deck] = player.split(': ');

            let deckArr = deck.split(', ');
            let isExists = objPlayers.hasOwnProperty(name);

            if (isExists) {
                objPlayers[name] = deckArr.concat(objPlayers[name]);
            } else {
                objPlayers[name] = deckArr;
            }
        }
        return objPlayers;
    }
    let objPlayers = createObject(input);

    for (let key in objPlayers) {
        let deckArr = objPlayers[key];
        let deckSet = new Set();
        deckArr.forEach(el => {
            deckSet.add(el);
        });
        objPlayers[key] = calculateValue(deckSet, map);
        console.log(`${key}: ${objPlayers[key]}`);
    }



}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    
);