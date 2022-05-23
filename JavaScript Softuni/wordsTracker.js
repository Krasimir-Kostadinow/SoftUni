function wordsTracker(input) {
    let searchWord = input.shift().split(' ');

    let words = new Map();

    searchWord.forEach(el => {
        words.set(el, 0);
    });

    input.forEach(el => {
       let isExists = words.has(el);
       if (isExists) {
           let count = words.get(el);
           words.set(el, count + 1);
       } 
    });

    let sortedArr = Array.from(words);
    sortedArr.sort((a, b) => b[1] - a[1]);
for (const [word, count] of sortedArr) {
    console.log(`${word} - ${count}`);
}
}

wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    );