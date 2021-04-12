function gameNumerWars(input) {
    let firstPlayer = input[0];
    let secondPlayer = input[1];
    let pointFirstPlayer = 0;
    let pointSecondPlayer = 0;
    let winner = '';
    let pointWinner = 0;
    let flag = false;

    let i = 2;
    while (input[i] !== 'End of game') {
        let currentPointFirstP = Number(input[i++]);
        let currentPointSecindP = Number(input[i]);

        if (currentPointFirstP > currentPointSecindP) {
            if (flag) {
                winner = firstPlayer;
                pointWinner = pointFirstPlayer;
                break;
            }
            pointFirstPlayer += currentPointFirstP - currentPointSecindP;
        } else {
            if (flag) {
                winner = secondPlayer;
                pointWinner = pointSecondPlayer;
                break;
            }
            pointSecondPlayer += currentPointSecindP - currentPointFirstP;
        }

        if (currentPointFirstP === currentPointSecindP) {
            console.log('Number wars!');
            flag = true;
        }

        i++;
    }
    if (!flag) {
        if (pointFirstPlayer > pointSecondPlayer) {
            winner = firstPlayer;
            pointWinner = pointFirstPlayer;
        } else {
            winner = secondPlayer;
            pointWinner = pointSecondPlayer;
        }
    }

    if (flag) {
        console.log(`${winner} is winner with ${pointWinner} points`);
    } else {
        console.log(`${firstPlayer} has ${pointFirstPlayer} points`);
        console.log(`${secondPlayer} has ${pointSecondPlayer} points`);
    }
}
gameNumerWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])


