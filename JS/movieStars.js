function movieStars(input) {

    let budget = Number(input[0]);
    let i = 1;
    let flag = true;
    let lastSalary = 0;
    while (input[i] !== 'ACTION') {
        let currentActor = input[i++];
        let valueActor = currentActor.length;
        let currentRemuneration = 0;
        if (valueActor > 15) {
            currentRemuneration = budget * 0.2;
            i--;
        } else {
            currentRemuneration = Number(input[i]);
        }
        if (budget < currentRemuneration) {
            flag = false;
            lastSalary = currentRemuneration;
            break;
        }
        budget -= currentRemuneration;
        i++;
    }
let residue = Math.abs(lastSalary - budget);
    if (flag) {
        console.log(`We are left with ${residue.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${residue.toFixed(2)} leva for our actors.`);
    }

}
movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])




