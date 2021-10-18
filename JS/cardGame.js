function cardGame(input) {
    let map = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
    for (const player of input) {
        let [name, deck] = player.split(': ');
        let deckArr = deck.split(', ');

        let newDeck = deckArr.map(el => {
            for (const key in map) {
                if (key === el[0]) {
                    el[0] = map[key];
                }
                if (key === el[1]) {
                    el[1] = map[key];
                }
            }
            return el[0] + el[1];
        });

    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);