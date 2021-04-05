function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numDays = Number(input[3]);
    let price = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Winter') {
                price = 45000;
            }
            else {
                price = 40000;
            }
            break;
        case 'Sofia':
            if (season === 'Winter') {
                price = 17000;
            }
            else {
                price = 12500;
            }
            break;
        case 'London':
            if (season === 'Winter') {
                price = 24000;
            }
            else {
                price = 20250;
            }
            break;
    }
    let totalPrice = numDays * price;

    if (destination === 'Dubai') {
        totalPrice *= 0.7;
    } else if (destination === 'Sofia') {
        totalPrice *= 1.25;
    }
    let residue = Math.abs(totalPrice - budget);

    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${residue.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${residue.toFixed(2)} leva more!`);
    }
 
}
movieDestination(["400000",
"Dubai",
"Winter",
"20"]);



