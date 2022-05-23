function activationKeys(input) {
    let key = input.shift();
    let i = 0;
    while (input[i] !== 'Generate') {
        let currentEl = input[i].split('>>>');
        let command = currentEl[0];

        if (command === 'Slice') {
            let startIndex = Number(currentEl[1]);
            let endIndex = Number(currentEl[2]);
            let slice = key.substring(startIndex, endIndex);
            key = key.replace(slice, '');
            console.log(key);
        } else if (command === 'Flip') {
            let flip = currentEl[1];
            let startIndex = Number(currentEl[2]);
            let endIndex = Number(currentEl[3]);
            if (flip === 'Upper') {
                let slice = key.substring(startIndex, endIndex);
                let newLetters = slice.toUpperCase();
                key = key.replace(slice, newLetters);
                console.log(key);
            } else if (flip === 'Lower') {
                let slice = key.substring(startIndex, endIndex);
                let newLetters = slice.toLowerCase();
                key = key.replace(slice, newLetters);
                console.log(key);
            }
        } else if (command === 'Contains') {
            let str = currentEl[1];
            if (key.includes(str)) {
                console.log(`${key} contains ${str}`);
            } else {
                console.log(`Substring not found!`);
            }
        }

        i++;
    }
console.log(`Your activation key is: ${key}`);
}
activationKeys((["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

);