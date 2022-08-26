function lettersChangeNumbers(string) {

    let alphabet = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };

    function calculatesEl(firstLetter, lastLetter, firstCharCode, lastCharCode, num) {
        let value = 0;

        if (firstCharCode >= 65 && firstCharCode <= 90) {
            let lowerLetter = firstLetter.toLowerCase();
            let valueLetter = alphabet[lowerLetter];
            value += num / valueLetter;
        } else if (firstCharCode >= 97 && firstCharCode <= 122) {
            let valueLetter = alphabet[firstLetter];
            value += num * valueLetter;
        }

        if (lastCharCode >= 65 && lastCharCode <= 90) {
            let lowerLetter = lastLetter.toLowerCase();
            let valueLetter = alphabet[lowerLetter];
            value = value - valueLetter;
        } else if (lastCharCode >= 97 && lastCharCode <= 122) {
            let valueLetter = alphabet[lastLetter];
            value = value + valueLetter;
        }

        return value;

    }

    let arr = string.split(' ');
    let arrFilter = arr.filter(el => el.length >= 1);
    let total = 0;
    for (let el of arrFilter) {
        let element = el.split('');
        let firstLetter = element.shift();
        let lastLetter = element.pop();
        let num = Number(element.join(''));
        let firstCharCode = firstLetter.charCodeAt();
        let lastCharCode = lastLetter.charCodeAt();
        let value = calculatesEl(firstLetter, lastLetter, firstCharCode, lastCharCode, num);
        total += value;
    }

console.log(total.toFixed(2));

}
lettersChangeNumbers('a1A');