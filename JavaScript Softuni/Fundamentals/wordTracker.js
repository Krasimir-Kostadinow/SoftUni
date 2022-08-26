function wordsTracker(element, input) {

    let words = arguments[0].split(' ');
    let book = {};

    for (const word of arguments[1]) {
        if (words.includes(word)) {
            if (book.hasOwnProperty(word)) {
                book[word] += 1;
            } else {
                book[word] = 1;
            }
        }
    }
    let arr = Object.entries(book);
    arr.sort((a, b) => {
        return b[1] - a[1];
    });

    for (const el of arr) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordsTracker(
    'hello this sentence',
    ['In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'special', 'task']
    )