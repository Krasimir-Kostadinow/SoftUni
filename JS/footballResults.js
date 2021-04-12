function footballResults(input) {
    // let firstMatch = input[0];
    //let secondMatch = input[1];
    //let thirdMatch = input[2];
    let wins = 0;
    let losses = 0;
    let tie = 0;
    for (let i = 0; i < input.length; i++) {
        let currentMatch = input[i];
        let hostTeam = Number(currentMatch[0]);
        let team = Number(currentMatch[2]);
        if (hostTeam > team) {
            wins++;
        } else if (hostTeam === team) {
            tie++;
        } else {
            losses++;
        }
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${tie}`);

}
footballResults(["0:2",
    "0:1",
    "3:3"]);


