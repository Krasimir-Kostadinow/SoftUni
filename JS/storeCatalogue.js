function storeCatalogue(input) {
    let group = {};
    for (const el of input) {
        let [product, price] = el.split(' : ');
        if (group.hasOwnProperty(product[0])) {
            group[product[0]].push([product, price]);
        } else {
            group[product[0]] = [[product, price]];
        }
    }
    let sorted = Object.entries(group);

    sorted.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (const group of sorted) {
        console.log(group[0]);
        group[1].sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
        for (const value of group[1]) {
            console.log(`  ${value[0]}: ${value[1]}`);
        }

    }

}
storeCatalogue(['Banana : 2',
'Rubic"s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']


);