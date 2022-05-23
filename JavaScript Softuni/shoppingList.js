function shoppingList(input) {
    let initialList = input.shift().split('!');

    let i = 0;
    while (input[i] !== 'Go Shopping!') {
        let current = input[i].split([' ']);
        let command = current[0];
        let products = current[1];
        let isExists = initialList.includes(products);
        let index = initialList.indexOf(products);
        if (command === 'Urgent' && !isExists) {
            initialList.unshift(products);
        } else if (command === 'Unnecessary' && isExists) {
            initialList.splice(index, 1);
        } else if (command === 'Correct' && isExists) {
            initialList[index] = current[2];
        } else if (command === 'Rearrange' && isExists) {
            let element = initialList.splice(index, 1);
            initialList.push(element[0]);
        }


        i++;
    }

    console.log(initialList.join(', '));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
;
