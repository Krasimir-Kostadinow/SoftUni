function destinationMapper(input) {
    let points = 0;
    let destination = [];
    let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/gm;
    let place = pattern.exec(input);
    while (place !== null) {
        destination.push(place[2]);
        let point = place[2].length;
        points += point;
        place = pattern.exec(input);
    }
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("ThisIs some InvalidInput");