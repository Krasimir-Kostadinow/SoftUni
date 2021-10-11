function muOnline(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitCoins = 0;
    let isDead = true;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');

        let commandOrMonster = room[0];
        let value = Number(room[1]);
        if (commandOrMonster === 'potion') {
            let residue = 100 - health;
            health += value;
          
            if (health > 100) {
                health = 100;
                console.log(`You healed for ${residue} hp.`);
            } else {
                console.log(`You healed for ${value} hp.`);
            }
       
            console.log(`Current health: ${health} hp.`);
        } else if (commandOrMonster === 'chest') {
            bitCoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${commandOrMonster}.`);
            } else {
                isDead = false;   
                console.log(`You died! Killed by ${commandOrMonster}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitCoins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");