function processOldNumbers(array) {

    function old(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {

            if (i % 2 !== 0) {
                newArray.unshift(array[i]);
            }
        }
        return newArray;
    }

    let oldArray = old(array);
    let result = oldArray.map(x => x * 2);
    console.log(result.join(' '));

}
processOldNumbers([10, 15, 20, 25]);