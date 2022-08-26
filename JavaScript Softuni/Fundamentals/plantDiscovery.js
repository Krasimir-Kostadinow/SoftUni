function plantDiscovery(input) {
    let exhibition = {};

    let numPlant = Number(input.shift());
    for (let i = 0; i < numPlant; i++) {
        let el = input.shift();
        let [name, rarity] = el.split('<->');
        rarity = Number(rarity);
        exhibition[name] = [rarity, []];
    }
    let i = 0;
    while (input[i] !== 'Exhibition') {
        let currentEl = input[i].split(': ');
        let command = currentEl[0];
        let plant = currentEl[1].split(' - ');
        let plantName = plant[0];
        if (exhibition.hasOwnProperty(plantName)) {
            if (command === 'Rate') {
                let rating = Number(plant[1]);
                exhibition[plantName][1].push(rating);
            } else if (command === 'Update') {
                let newRarity = Number(plant[1]);
                exhibition[plantName][0] = newRarity;
            } else if (command === 'Reset') {
                exhibition[plantName][1] = [];
            }
        } else {
            console.log('error');
        }
        i++;
    }
    for (let namePlant in exhibition) {
        let array = exhibition[namePlant][1];
        let averageRating = 0;
        let sum = 0;
        array.forEach(el => {
            sum += el;
            averageRating = sum / array.length;
        });
        exhibition[namePlant][1] = averageRating;
    }
let sorted = Object.entries(exhibition);
sorted.sort((a, b) => {
    return b[1][1] - a[1][1];
});
sorted.sort((a,b) => {
return b[1][0] - a[1][0];
});

console.log('Plants for the exhibition:');
for (const el of sorted) {
    console.log(`- ${el[0]}; Rarity: ${el[1][0]}; Rating: ${(el[1][1]).toFixed(2)}`);
}


}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]

);