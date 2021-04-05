function movieStars(input) {

    let budjet = Number(input[0]);
    let i = 1;
    let flag = false;
    while (input[i] !== 'ACTION') {
        let currentActor = input[i++];
        let valueActor = currentActor.length;
        let currentRemuneration = 0;
        if (valueActor > 15) {
            currentRemuneration = budjet * 0.2;
            i--;
        } else {
            currentRemuneration = Number(input[i]);
        }
        if (budjet < currentRemuneration) {
            flag = true;
            break;
        }
        budjet -= currentRemuneration;

        i++;
    }


    if (flag) {
        console.log(`We are left with ${budjet.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${budjet.toFixed(2)} leva for our actors.`);
    }

}
movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"]);


