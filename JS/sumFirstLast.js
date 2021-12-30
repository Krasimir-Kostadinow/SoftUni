function sumFirstLast(array) {
    let firstNum = Number(array[0]);
    let lastNum = Number(array[array.length - 1]);
    let result = firstNum + lastNum;
    console.log(result);
    
}
sumFirstLast(['5', '10']);