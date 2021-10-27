function legendaryFarming(input) {
    let keyMaterials = { fragments: 0, motes: 0, shards: 0 };
    let junk = {};
    let legendaryItem = '';
    let array = input.split(' ');
    for (let i = 0; i < array.length; i++) {

        let quantity = Number(array[i]);
        let material = array[i + 1].toLowerCase();

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
        } else {
            if (junk.hasOwnProperty(material)) {
                junk[material] += quantity;
            } else {
                junk[material] = quantity;
            }
        }

        if (keyMaterials.fragments >= 250) {
            keyMaterials['fragments'] -= 250;
            legendaryItem = 'Valanyr';
            break;
        } else if (keyMaterials.motes >= 250) {
            keyMaterials['motes'] -= 250;
            legendaryItem = 'Dragonwrath';
            break;
        } else if (keyMaterials.shards >= 250) {
            keyMaterials['shards'] -= 250;
            legendaryItem = 'Shadowmourne';
            break;
        }

        i++;

    }
    console.log(`${legendaryItem} obtained!`);
    let sorted = Object.entries(keyMaterials);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.sort((a, b) => {
        return b[1] - a[1];
    })
    sorted.forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);
    });
    let sortedJunk = Object.entries(junk);
    sortedJunk.sort((a, b) => a[0].localeCompare(b[0]));
    // sortedJunk.sort((a, b) => {
    //     return b[1] - a[1];
    // })
    sortedJunk.forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);
    });
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');