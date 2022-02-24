function heroicInventory(input) {
    let result = [];
    
    for (const el of input) {
        let [name, level, items] = el.split(' / ');
        level = Number(level);
        items = items.split(', ');

        result.push({name: name, level: level, items: items});
    }


    return JSON.stringify(result);

}
console.log(heroicInventory([
    'Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)); 