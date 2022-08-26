function biggestElement(matrix) {
    let biggestEl = Number.MIN_SAFE_INTEGER;

for (const arr of matrix) {
    for (const el of arr) {
        if (el > biggestEl) {
            biggestEl = el;
        }
    }
}
return biggestEl;
}
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
    )); 