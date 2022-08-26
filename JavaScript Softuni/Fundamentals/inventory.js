function inventory(input) {
    let heroesArr = [];
    for (let el of input) {
        let hero = {};
        let heroes = el.split(' / ');

        let name = heroes[0];
        hero.Hero = name;
        let level = Number(heroes[1]);
        hero.level = level;
        let items = heroes[2].split(', ').sort().join(', ');
        hero.items = items;
        heroesArr.push(hero);

    }
    heroesArr.sort(function (a, b) {
        return a.level - b.level;
    });

    for (let hero of heroesArr) {
        for (let key in hero) {
            if (key === 'Hero') {
                console.log(`${key}: ${hero[key]}`);
            } else {
                console.log(`${key} => ${hero[key]}`);
            }
        }
    }

}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
);