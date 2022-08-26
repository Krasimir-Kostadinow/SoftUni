function lowestPrices(input) {
    let town = {};
    for (const el of input) {
        let [name, product, price] = el.split(' | ');
        price = Number(price);
        if (town.hasOwnProperty(product)) {
            if (town[product].productPeice > price) {
                town[product] = { productPeice: price, nameTown: name }
            }
        } else {
            town[product] = { productPeice: price, nameTown: name }
        }

    }
for (const product in town) {
 console.log(`${product} -> ${town[product].productPeice} (${town[product].nameTown})`);
}
}
lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]
);  