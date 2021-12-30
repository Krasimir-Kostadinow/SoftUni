

function aggregate(arr) {

    function sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            sum += el;
        }
        return sum;
    }
    
    function inverseSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            let newEl = 1 / el;
            sum += newEl;
        }
        return sum;
    }
    
    function concat(arr) {
        let sum = '';
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
    
            sum += el;
        }
        return sum;
    }

    console.log(sum(arr));
    console.log(inverseSum(arr));
    console.log(concat(arr));
}
aggregate([2, 4, 8, 16]);

