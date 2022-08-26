function shnake(input) {
    let string = input[0];
    let pattern = input[1];

    while (true) {
        let currentStr = '';
        
        let firstIndex = string.indexOf(pattern);
        let lastIndex = string.lastIndexOf(pattern);

        let firstString = string.substring(0, firstIndex);
        let secondString = string.substring(firstIndex + pattern.length, lastIndex);
        let lastString = string.substring(lastIndex + pattern.length, string.length);

        currentStr = firstString + secondString + lastString;
        if (string !== currentStr) {
            string = currentStr;
            let first = pattern.substring(0, pattern.length / 2);
            let last = pattern.substring((pattern.length / 2) + 1, pattern.length);
            pattern = first + last;
            console.log('Shaked it.');
        } else {
            console.log('No shake.');
            break;
        }
    }
    console.log(string);
}
shnake(['##mtm!!mm.mm*mtm.#',
'mtm']);