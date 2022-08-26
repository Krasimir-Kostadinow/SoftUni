function processOddPosition(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 !== 0) {
          newArr.push(element * 2);  
        }  
    }
    let reverseArr = newArr.reverse();
    return reverseArr.join(' ');
    
}
console.log(processOddPosition([3, 0, 10, 4, 7, 3]));