function storage(input) {

    let storage = new Map();

    for (const el of input) {
        let element = el.split(' ');
        let [item, quantity] = element;
        quantity = Number(quantity);
        let isExists = storage.has(item);
        if (isExists) {
            let value = storage.get(item);
            storage.set(item, value + quantity);
        } else {
            storage.set(item, quantity);
        }

    }

for (const [item, quantity] of storage) {
console.log(`${item} -> ${quantity}`);
}
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

);