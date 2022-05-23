function wordOccurrences(input) {
    let countWord = new Map();

    for (const word of input) {
        let isExist = countWord.has(word);
        if (isExist) {
            let oldCount = countWord.get(word);
            countWord.set(word, oldCount + 1);
        } else {
            countWord.set(word, 1);
        }

    }
    let arr = Array.from(countWord);
    arr.sort((a, b) => {
        return b[1] - a[1];
    })
    
    for (const [word, count] of arr) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);