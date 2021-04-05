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

}
movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"]);
