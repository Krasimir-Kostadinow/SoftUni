function consoredWord(text, word) {
    let consored = '*';

    while (text.includes(word)) {

        text = text.replace(word, consored.repeat(word.length));
    }

    console.log(text);
}
consoredWord('A small sentence with some words small', 'small');