function ticTacToe(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    function win(dashboard) {
        let output = true;
        let winner = '';
        if (dashboard[0][0] === dashboard[0][1] && dashboard[0][1] === dashboard[0][2] && dashboard[0][0] !== false) {
            output = false;
            winner = dashboard[0][0];
        } else if (dashboard[1][0] === dashboard[1][1] && dashboard[1][1] === dashboard[1][2] && dashboard[1][0] !== false) {
            output = false;
            winner = dashboard[0][0];
        } else if (dashboard[2][0] === dashboard[2][1] && dashboard[2][1] === dashboard[2][2] && dashboard[2][0] !== false) {
            output = false;
            winner = dashboard[0][0];
        } else if (dashboard[0][0] === dashboard[1][0] && dashboard[1][0] === dashboard[2][0] && dashboard[0][0] !== false) {
            output = false;
            winner = dashboard[0][0];
        } else if (dashboard[0][1] === dashboard[1][1] && dashboard[1][1] === dashboard[2][1] && dashboard[0][1] !== false) {
            output = false;
            winner = dashboard[0][1];
        } else if (dashboard[0][2] === dashboard[1][2] && dashboard[1][2] === dashboard[2][2] && dashboard[0][2] !== false) {
            output = false;
            winner = dashboard[0][2];
        } else if (dashboard[0][0] === dashboard[1][1] && dashboard[1][1] === dashboard[2][2] && dashboard[0][0] !== false) {
            output = false;
            winner = dashboard[0][0];
        } else if (dashboard[0][2] === dashboard[1][1] && dashboard[1][1] === dashboard[2][0] && dashboard[0][2] !== false) {
            output = false;
            winner = dashboard[0][2];
        }
        return [output, winner];
    }
    let counterMove = 0;
    while (win(dashboard)[0]) {
        let end = false;

        for (const arr of dashboard) {
            if (arr.includes(false)) {
                end = false;
                break;
            } else {
                end = true;
            }
        }

        if (end) {
            break;
        }

        let typePlayer = '';
        if (counterMove % 2 === 0) {
            typePlayer = 'X';
        } else {
            typePlayer = 'O';
        }
        counterMove++;
        let player = input.shift().split(' ');
        let row = Number(player[0]);
        let col = Number(player[1]);
        if (dashboard[row][col] === false) {
            dashboard[row][col] = typePlayer;
        } else {
            console.log('This place is already taken. Please choose another!');
            counterMove--;
        }

    }
    if (win(dashboard)[0]) {
        console.log('The game ended! Nobody wins :(');
        dashboard.forEach(el => {
            console.log(el.join('\t')); 
         });
    } else {
        console.log(`Player ${win(dashboard)[1]} wins!`);
        dashboard.forEach(el => {
           console.log(el.join('\t')); 
        });
    }
}
ticTacToe(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
   
);