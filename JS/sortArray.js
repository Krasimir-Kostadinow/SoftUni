function sortArray(array, command) {
    if (command === 'asc') {
        array.sort((a, b) => {
            return a - b;
        });
    } else if (command === 'desc') {
        array.sort((a, b) => {
            return b - a;
        });
    }
    return array;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc')); 