function sequence(n, k) {
    let newArr = [1];
    while (newArr.length !== n) {
        let sum = 0;
        if (newArr.length <= k) {
            sum = newArr.reduce((acc, el) => {
                return acc += el;
            }, 0);
        } else {
            let slice = newArr.slice(newArr.length - k, newArr.length);
            sum = slice.reduce((acc, el) => {
                return acc += el;
            }, 0);
        }
        newArr.push(sum);
    }
console.log(newArr);

}
sequence(8, 2);