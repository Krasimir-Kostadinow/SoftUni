function firstAndLastKNumbers(array) {

    let firstElement = array.shift();
    let firstArray = array.slice(0, firstElement).join(' ');
    console.log(firstArray);
    let secondArray = array.slice(array.length - firstElement).join(' ');
    console.log(secondArray);
}
firstAndLastKNumbers([2, 7, 8, 9]);