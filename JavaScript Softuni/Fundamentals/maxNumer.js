function maxNumber(array) {
    let top = [];
    for (let index = 0; index < array.length; index++) {
        let current = array[index];
       for (let j = index+1; j < array.length;j++) {
           let secondCurrent = array[j];
           if (current > secondCurrent) {
               top.push(current);
           }
       }
    }
console.log(top);




}
maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);