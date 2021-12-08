function emojiDetector(input) {
    let str = input[0];
    let patternDigit = /[0-9]/g;
    let pattern = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm;

    let output = [];
    let arrDigit = str.match(patternDigit);
    let cool = arrDigit.reduce((acc, el) => {
        acc *= el;
        return acc;
    }, 1);
    let counter = 0;
    let emoji = pattern.exec(str);
    while (emoji !== null) {
        let sumCharCodeWord = 0;
        let word = emoji[2];
        counter++;
        for (const letter of word) {
            let charCode = letter.charCodeAt();
            sumCharCodeWord += charCode;
        }
        if (sumCharCodeWord >= cool) {
            output.push(emoji[0]);
        }
        emoji = pattern.exec(str);
    }

    console.log(`Cool threshold: ${cool}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    output.forEach(el => {
        console.log(el);
    });
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);