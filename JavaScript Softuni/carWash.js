function carWash(array) {

    let value = 0;


    for (let i = 0; i < array.length; i++) {
        const comand = array[i];
        let func = null;
        if (comand === 'soap') {
            func = a => a + 10;
        } else if (comand === 'water') {
            func = a => a * 1.2;
        } else if (comand === 'vacuum cleaner') {
            func = a => a * 1.25;
        } else if (comand === 'mud') {
            func = a => a - a * 0.1;
        }

    value = func(value);

    }
console.log(`The car is ${value.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);