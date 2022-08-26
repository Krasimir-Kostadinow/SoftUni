function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    let isDead = false;

    let arrayRoom = array[0].split('|');

    for (let i = 0; i < arrayRoom.length; i++) {
        let element = arrayRoom[i];
        let room = element.split(' ');
        let item = room[0];
        let number = Number(room[1]);

        if (item === 'potion') {
            if ((health + number) >= 100) {
            health += number;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
            }
        } else if (item === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;
            }
        }

    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }



}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);