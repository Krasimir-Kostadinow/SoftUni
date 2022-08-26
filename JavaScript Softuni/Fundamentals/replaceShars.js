function replaceShars(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        let firstChar = string[i];
        let secondChar = string[i + 1];
        if (firstChar !== secondChar) {
            newString += firstChar;
        }
    }
    console.log(newString);
}
replaceShars('qqqwerqwecccwd');   