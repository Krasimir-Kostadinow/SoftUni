function positiveNumbers(array) {
  
    let newArray = [];

    for (const element of array) {
        if (element >= 0) {
            newArray.push(element);
        } else {
            newArray.unshift(element);
        }
    }
for (const iterator of newArray) {
    console.log(iterator);
}
}
positiveNumbers([3, -2, 0, -1]);