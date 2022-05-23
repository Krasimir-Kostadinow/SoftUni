function needForSpeed(input) {
    let numCars = Number(input.shift());
    let garage = {};
    for (let i = 0; i < numCars; i++) {
        let el = input.shift();
        let currentCar = el.split('|');
        let car = currentCar[0];
        let mileage = Number(currentCar[1]);
        let fuel = Number(currentCar[2]);
        garage[car] = [mileage, fuel];
    }
    let i = 0;
    while (input[i] !== 'Stop') {
        let el = input[i].split(' : ');
        let command = el[0];
        let car = el[1];

        if (command === 'Drive') {
            let mileage = Number(el[2]);
            let fuel = Number(el[3]);
            if (fuel > garage[car][1]) {
                console.log('Not enough fuel to make that ride');
            } else if (fuel <= garage[car][1]) {
                garage[car][1] -= fuel;
                garage[car][0] += mileage;
                console.log(`${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`);
                if (garage[car][0] > 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete garage[car];

                }
            }
        } else if (command === 'Refuel') {
            let fuel = Number(el[2]);
            if (garage[car][1] + fuel > 75) {
                fuel = 75 - garage[car][1];
            }
            garage[car][1] += fuel;
            console.log(`${car} refueled with ${fuel} liters`);


        } else if (command === 'Revert') {
            let mileage = Number(el[2]);
            garage[car][0] -= mileage;
            if (garage[car][0] > 10000) {
                console.log(`${car} mileage decreased by ${mileage} kilometers`);
            } else {
                garage[car][0] = 10000;
            }
        }
        i++;
    }
    let output = Object.entries(garage);
    output.sort((a, b) => a[0].localeCompare(b[0]));
    output.sort((a, b) => {
        return b[1][0] - a[1][0];
    });

    for (const car of output) {
        console.log(`${car[0]} -> Mileage: ${car[1][0]} kms, Fuel in the tank: ${car[1][1]} lt.`);
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]

);