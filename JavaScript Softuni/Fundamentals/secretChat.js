function secretChat(input) {
    let message = input.shift();
    let i = 0;
    while (input[i] !== 'Reveal') {
        let currentEl = input[i].split(':|:');
        let command = currentEl[0];
        if (command === 'ChangeAll') {
            while (message.includes(currentEl[1])) {
                message = message.replace(currentEl[1], currentEl[2]);
            }
            console.log(message);
        } else if (command === 'Reverse') {
            if (message.includes(currentEl[1])) {
                message = message.replace(currentEl[1], '');
                for (let i = currentEl[1].length - 1; i >= 0; i--) {
                    message += currentEl[1][i];
                }
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'InsertSpace') {
            let newMessage = '';
            for (let i = 0; i < message.length; i++) {
                if (i === Number(currentEl[1])) {
                    newMessage += ' ';
                }
                newMessage += message[i];
            }
            message = newMessage;
            console.log(message);
        }
        i++;
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

);