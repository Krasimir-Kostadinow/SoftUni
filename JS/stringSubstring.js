function stringSubstring(word, text) {
    word = word.toLowerCase();
    word = ' ' + word.concat(' ');
    text = text.toLowerCase();
    text = ' ' + text.concat(' ');
    let isExist = text.includes(word);
    if (isExist) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'


);