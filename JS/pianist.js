function pianist(input) {
    let book = {};
    let numPieces = Number(input.shift());
    for (let i = 0; i < numPieces; i++) {
        let el = input.shift();
        let [pieces, composer, key] = el.split('|');
        book[pieces] = [composer, key];
    }

    let i = 0;
    while (input[i] !== 'Stop') {
        let currentEl = input[i].split('|');
        let command = currentEl[0];
        let piece = currentEl[1];
        if (command === 'Add') {
            let composer = currentEl[2];
            let key = currentEl[3];
            if (!book.hasOwnProperty(piece)) {
                book[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove') {

            if (book.hasOwnProperty(piece)) {
                delete book[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            let key = currentEl[2];
            if (book.hasOwnProperty(piece)) {
                book[piece][1] = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        i++;
    }
    let array = Object.entries(book);
    array.sort((a, b) => {
        return a[1][0].localeCompare(b[1][0]);
    });
    array.sort((a, b) => a[0].localeCompare(b[0]));
    for (const el of array) {
        let piece = el[0];
        let composer = el[1][0];
        let key = el[1][1];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]


);