function inventory(input) {

    let list = input.shift().split(', ');

    let i = 0;
    while (input[i] !== 'Craft!') {
        let current = input[i].split(' - ');
        let command = current[0];
        let el = current[1];
        let isExist = list.includes(el);

        let index = list.indexOf(el);
        if (command === 'Collect' && !isExist) {
            list.push(el);
        } else if (command === 'Drop' && isExist) {
            list.splice(index, 1);
        } else if (command === 'Combine Items') {
            let element = el.split(':');
            let oldElement = element[0];
            let newElement = element[1];
            ///// ???????

            list.splice(index + 1, 0, current[2]);
        } else if (command === 'Renew' && isExist) {
            let del = list.splice(el,1);
            list.push(del);
        }

   
        i++;
    }
console.log(list.join(', '));

}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
);