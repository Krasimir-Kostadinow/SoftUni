function inventory(input) {

    let list = input.shift().split(', ');

    let i = 0;
    while (input[i] !== 'Craft!') {
        let current = input[i].split(' - ');
        let command = current[0];
        let el = current[1];
        let index = list.indexOf(el);

        switch (command) {
            case 'Collect':
                if (index < 0) {
                    list.push(el);
                }
                break;
            case 'Drop':
                if (index >= 0) {
                    list.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let element = el.split(':');
                let oldElement = element[0];
                let newElement = element[1];
                index = list.indexOf(oldElement);
                if (index >= 0) {
                    list.splice(index + 1, 0, newElement);
                }
                break;
            case 'Renew':
                if (index >= 0) {
                    let del = list.splice(index, 1);
                    list.push(del);
                }
                break;

        }

        i++;
    }
    console.log(list.join(', '));

}
inventory(
    [
        'Iron, Wood, Sword', 
        'Collect - Gold', 
        'Drop - Wood', 
        'Craft!'
      ]
      
);