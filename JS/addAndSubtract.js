function addAndSubtrect(array) {
    let sumArray = 0;
    let sumArrayModified = 0;
    for (let index = 0; index < array.length; index++) {
        sumArray += array[index];
        if (array[index] % 2 === 0) {
            array[index] += index;
        } else {
            array[index] -= index;
        }
        sumArrayModified += array[index];
    }
    console.log(array);
    console.log(sumArray);
    console.log(sumArrayModified);
}
addAndSubtrect([5, 15, 23, 56, 35]);