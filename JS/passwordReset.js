function passwordReset(input) {
    let password = input.shift();
    let i = 0;
    while (input[i] !== 'Done') {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        if (command === 'TakeOdd') {
            let newPass = '';
            for (let i = 0; i < password.length; i++) {
                let el = password[i];
                if (i % 2 !== 0) {
                    newPass += el;
                }
            }
            password = newPass;
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(currentEl[1]);
            let length = Number(currentEl[2]);
            let word = '';
            for (let i = index; i < index + length; i++) {
                let character = password[i];
                word += character;
            }
            password = password.replace(word, '');
            console.log(password);
        } else if (command === 'Substitute') {
            let oldWord = currentEl[1];
            let newWord = currentEl[2];
            if (password.includes(oldWord)) {
                while (password.includes(oldWord)) {
                    password = password.replace(oldWord, newWord);
                }
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
        i++;
    }
console.log(`Your password is: ${password}`);
}
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

);