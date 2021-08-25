function gladiatorInventory(array) {


    let newInventory = array.shift().split(' ');
    function buy(params) {
        let isFlag = newInventory.includes(params);
        if (!isFlag) {
            newInventory.push(params);
        }
        return newInventory;

    }
    function trash(params) {
        let isFlag = newInventory.includes(params);
        while (isFlag) {
            let index = newInventory.indexOf(params);
            newInventory.splice(index, 1);
            isFlag = newInventory.includes(params);
        }
        return newInventory;
    }
    function repair(params) {
        let bufer = [];
        let isFlag = newInventory.includes(params);
        while (isFlag) {
            let index = newInventory.indexOf(params);
            let el = newInventory.splice(index, 1);
            bufer.push(el[0]);


            isFlag = newInventory.includes(params);
        }
        newInventory.push(...bufer);
        return newInventory;

    }
    function upgrade(params) {
       let equipmentArray = params.split('-');
       let equipment = equipmentArray[0];
       let upgrades = equipmentArray[1];
       let isFlag = newInventory.includes(equipment);
       if (isFlag) {
           let newUpgrade = (`${equipment}:${upgrades}`);
           let index = newInventory.indexOf(equipment);
           newInventory.splice(index + 1, 0, newUpgrade);
       }
       return newInventory;

    }
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' ');
        let command = element[0];
        let equipment = element[1];

        switch (command) {
            case 'Buy':
                newInventory = buy(equipment);
                break;
            case 'Trash':
                newInventory = trash(equipment);
                break;
            case 'Repair':
                newInventory = repair(equipment);
                break;
            case 'Upgrade':
                newInventory = upgrade(equipment);
                break;
        }

    }
    return newInventory.join(' ');

}
console.log(gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
));
