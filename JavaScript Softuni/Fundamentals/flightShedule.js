function flightShedule(input) {
    let specificSector = input[0];
    let changeFlights = input[1];
    let status = input[2].join();
    let cencelled = [];
    let readyToFly = [];


    for (let i = 0; i < specificSector.length; i++) {
        let element = specificSector[i].split(' ');
        let numberFlight = element[0];
        let destination = element[1];
        for (let j = 0; j < changeFlights.length; j++) {
            let el = changeFlights[j].split(' ');
            let numFlight = el[0];
            let changeStatus = el[1];

            if (numFlight === numberFlight && changeStatus === 'Cancelled') {
                let object = { Destination: destination, Status: changeStatus };
                cencelled.push(object);
                specificSector.splice(i, 1);
                i = 0;
            }

        }
    }
    let readyFlight = specificSector.map(el => el.split(' '));
    for (const obj of readyFlight) {
        let object = { Destination: obj[1], Status: status };
        readyToFly.push(object);
    }

    if (status === 'Cancelled') {
        for (let obj of cencelled) {
            console.log(obj);
        }
    } else {
        for (let obj of readyToFly) {

            console.log(obj);
        }
    }


}
flightShedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],

    ['Ready to fly']
]

);