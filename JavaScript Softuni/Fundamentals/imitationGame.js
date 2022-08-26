function imitationGame(input) {

    let message = input.shift();

    let i = 0;
    while (input[i] !== 'Decode') {
        let command = input[i].split('|');
        if (command[0] === 'Move') {
            let slice = message.substring(0, Number(command[1]));
            let newMessage = message.replace(slice, '');
            message = newMessage + slice;
        } else if (command[0] === 'Insert') {
            let newMessage = '';
            for (let i = 0; i < message.length; i++) {
                if (i === Number(command[1])) {
                    newMessage += command[2];
                }
                newMessage += message[i];
            }
            if (Number(command[1]) === message.length) {
                newMessage += command[2];
            }
            message = newMessage;
        } else if (command[0] === 'ChangeAll') {
            while (message.includes(command[1])) {
                message = message.replace(command[1], command[2]);
            }
        }
        i++;
    }
    console.log(`The decrypted message is: ${message}`);
}
imitationGame(
    [
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode',
      ]
      
);