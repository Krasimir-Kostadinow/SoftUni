function mergeArrays(firstArray, secondArray) {
    let mergeArray = [];
 
    for (let index = 0; index < secondArray.length; index++) {
        if (index % 2 === 0) {
            mergeArray.push(Number(firstArray[index]) + Number(secondArray[index]));
        } else {
            mergeArray.push(firstArray[index] + secondArray[index]);
        }
    }

console.log(mergeArray.join(' - '));
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);