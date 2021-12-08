function mirrorWords(input) {
    let countPairs = 0;
    let mirrorWord = [];
    let string = input[0];
    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1/gm;
    let pairsWords = pattern.exec(string);
    while (pairsWords !== null) {
        countPairs++;
        let oneWord = pairsWords[2];
        let twoWord = pairsWords[3];
        let reverseTwoWord = twoWord.split('');
        let newTwoWord = reverseTwoWord.reverse().join('');

        if (oneWord === newTwoWord) {
            mirrorWord.push(`${oneWord} <=> ${twoWord}`);
        }
        pairsWords = pattern.exec(string);
    }
    if (countPairs === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${countPairs} word pairs found!`);
    }
    if (mirrorWord.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(`${mirrorWord.join(', ')}`);
    }
}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]
);