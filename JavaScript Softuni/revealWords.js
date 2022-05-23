function revealWords(words, text) {
    let arrWord = words.split(', ');
    function counterTemplates(text) {
        let wordTemplates = '';
        for (let i = 0; i < text.length; i++) {
            const character = text[i];

            if (character === '*') {
                wordTemplates += '*';
            } else if (wordTemplates.length > 0 && character !== '*') {
                break;
            }
        }
        return wordTemplates;
    }

    let templeateLength = counterTemplates(text);

    while (text.includes('*')) {
        let templeate = counterTemplates(text);
        let newWord = undefined;
        for (const word of arrWord) {
            if (word.length === templeate.length) {
                newWord = word;
                break;
            }
        }
        text = text.replace(templeate, newWord);
    }

    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
);