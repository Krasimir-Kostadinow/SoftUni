function solveGame(input) {
    let numHero = Number(input.shift());
    let game = {};
    for (let i = 0; i < numHero; i++) {
        let el = input.shift();
        let hero = el.split(' ');
        let nameHero = hero[0];
        let hp = Number(hero[1]);
        let mp = Number(hero[2]);
        game[nameHero] = [hp, mp];
    }

    let i = 0;
    while (input[i] !== 'End') {
        let el = input[i].split(' - ');
        let command = el[0];
        let name = el[1];
        if (command === 'Heal') {
            let value = Number(el[2]);
         
            if ((game[name][0] + value) > 100) {
                value = 100 - game[name][0];
                game[name][0] = 100;
            } else {
                game[name][0] += value;
            }
            console.log(`${name} healed for ${value} HP!`);
        } else if (command === 'Recharge') {
            let value = Number(el[2]);
            if ((game[name][1] + value) > 200) {
                value = 200 - game[name][1];
                game[name][1] = 200;
            } else {
                game[name][1] += value;
            }
            console.log(`${name} recharged for ${value} MP!`);
        } else if (command === 'TakeDamage') {
            let damage = Number(el[2]);
            let attacker = el[3];
            game[name][0] -= damage;
            if (game[name][0] > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${game[name][0]} HP left!`);
            } else {
                delete game[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        } else if (command === 'CastSpell') {
            let mpNeed = Number(el[2]);
            let spellName = el[3];
            if (game[name][1] >= mpNeed) {
                game[name][1] -= mpNeed;
                console.log(`${name} has successfully cast ${spellName} and now has ${game[name][1]} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        }
        i++;
    }

    let output = Object.entries(game);
    output.sort((a, b) => a[0].localeCompare(b[0]));
    output.sort((a, b) => {
        return b[1][0] - a[1][0];
    });
    for (const el of output) {
        console.log(`${el[0]}`);
        console.log(`  HP: ${el[1][0]}`);
        console.log(`  MP: ${el[1][1]}`);
    }
}
solveGame(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
      ]
);