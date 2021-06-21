function tseamAcound(array) {

    let game = array[0];
    let firstGame = game.split(' ');

    for (let i = 1; i < array.length; i++) {
        let element = array[i];
     
        if (element === 'Play!') {
            break;
        } 
        let newGame = element.split(' ');
        let command = newGame[0];
        let nameGame = newGame[1];
        if (command === 'Install') {
            let isFlag = true;
            for (let j = 0; j < firstGame.length; j++) {
                if (firstGame[j] === nameGame) {
                    isFlag = false;
                }
            } if (isFlag) {
                firstGame.push(nameGame);
            }
        } else if (command === 'Uninstall') {
            for (let j = 0; j < firstGame.length; j++) {
                if (nameGame === firstGame[j]) {
                    firstGame.splice(j, j);
                }
            }
        } else if (command === 'Update') {
            for (let j = 0; j < firstGame.length; j++) {
                if (nameGame === firstGame[j]) {
                    firstGame.splice(j, j);
                    firstGame.push(nameGame);
                }
            }
        } else if (command === 'Expansion') {
            for (let j = 0; j < firstGame.length; j++) {
                let gameExp = nameGame.split('-');
                if (gameExp[0] === firstGame[j]) {
                    let expansion = (`${gameExp[0]}:${gameExp[1]}`);
                    firstGame.splice(j + 1, 0, expansion);
                }
            }

        }


    }
    console.log(firstGame.join(' '));
}
tseamAcound(['CS WoW Diablo', 'Play!',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go'
   ]
);