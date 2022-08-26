function hashtag(text) {
    let arr = text.split(' ').filter(hasOnlyLetters);


    function hasOnlyLetters(words) {
        let isValid = true;
        let word = words.substring(1);
    for (let i = 0; i < word.length; i++) {
        word = word.toLowerCase();
        let charCode = word.charCodeAt(i);

        if (charCode < 97 || charCode > 122) {
            isValid = false;
            break;
        }
    }
    return isValid;
    }

    for (const word of arr) {
        if (word.startsWith('#') && word.length > 1 && hasOnlyLetters(word)) {
            let newWord = word.replace('#', '');
            console.log(newWord);
            }
          
    }
}
hashtag('Nowadays #ever===yone uses # to tag a #special word in #socialMedia');