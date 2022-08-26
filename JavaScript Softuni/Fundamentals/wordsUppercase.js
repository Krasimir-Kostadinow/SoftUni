function wordsUppercase(sentence) {
    let pattern = /\W+/gm;
    let array = sentence.split(pattern);
    if (array[array.length - 1] === '') {
        array.pop();
    }
    let upperCase = array.map(el => el.toUpperCase());

    console.log(upperCase.join(', '));

}
wordsUppercase('Functions in JS can be nested, i.e. hold other functions');