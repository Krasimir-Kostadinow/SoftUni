function roatRadar(speed, area) {
    let speedLimit = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }
    let residue = speedLimit - speed;
    if (residue < 0) {
        residue = Math.abs(residue);
        if (residue > 0 && residue <= 20) {
            status = 'speeding';
        } else if (residue > 20 && residue <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${residue} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

}
roatRadar(200, 'motorway');