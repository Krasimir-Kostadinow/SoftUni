function rightPlace(str, char, result) {
    let name = '';
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (currentLetter === '_') {
            currentLetter = char;
        }
        name += currentLetter;
    }
 let output = (name === result) ? 'Matched' : 'Not Matched'; 
console.log(output);

}
rightPlace('Str_ng', 'o', 'Strong');