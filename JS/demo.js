function demo() {
    function name(currentName) {
        let currentArray = [];
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            if (element.name === currentName) {
                let el = items.splice(i, 1);
                currentArray.push(el);
                i--;
            }

        }
        return currentArray;
    }

    var items = [

        { name: 'Theee', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'Anddddd', value: 45 },
        { name: 'Theee', value: -12 },
        { name: 'Theee', value: 13 },
        { name: 'Anddddd', value: 37 }

    ];
let newItems = [];
    let currentName = items[0].name;
    while (items.length !== 0) {
        let currentArray = name(currentName);
        newItems.push(currentArray);
        currentName = items[0].name;
    }

console.log(newItems);



}
demo();