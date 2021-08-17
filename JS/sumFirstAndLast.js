function sumFirstAndLast(array) {
    let first = Number(array[0]);
    let last = Number(array[array.length - 1]);

    let sum = first + last;
    console.log(sum);
    
}
sumFirstAndLast(['20']);