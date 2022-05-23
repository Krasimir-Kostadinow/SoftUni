function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(el => Number(el));
    let index = 0;
    let i = 0;
    while (input[i] !== 'Love!') {
        let currentJunp = input[i].split(' ');
        index += Number(currentJunp[1]);
        if (index > neighborhood.length - 1) {
            index = 0;
        }
        if (neighborhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else if (neighborhood[index] > 0) {
            neighborhood[index] -= 2;
            if (neighborhood[index] <= 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        i++;
    }
    console.log(`Cupid's last position was ${index}.`);
    let count = 0;
    for (let currentHeart of neighborhood) {
        if (currentHeart > 0) {
            count++;
        }
    }

    if (count === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }


}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
;