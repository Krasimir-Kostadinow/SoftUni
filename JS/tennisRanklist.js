function tennisRanklist(input) {
    let numTurnaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        let currentStage = input[i];
        if (currentStage === 'W') {
            points += 2000;
            wins++;
        } else if (currentStage === 'F') {
            points += 1200;
        } else if (currentStage === 'SF') {
            points += 720;
        }
    }
        let averagePoints = Math.floor(points / numTurnaments);
        let parcentWins = (wins / numTurnaments) * 100;

        console.log(`Final points: ${points + startPoints}`);
        console.log(`Average points: ${averagePoints}`);
        console.log(`${parcentWins.toFixed(2)}%`);

    }

 tennisRanklist(["4",
 "750",
 "SF",
 "W",
 "SF",
 "W"]);
 
