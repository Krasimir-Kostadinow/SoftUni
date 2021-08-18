function lastKNumbersSequence(n, k) {

    let array = [1];

    for (let i = 1; i < n; i++) {
        let gutOut;
        if (array.length < k) {
            gutOut = array;
        } else {
            gutOut = array.slice(array.length - k);
        }

        function sumGutOut(array) {
            let sum = 0;
            for (let j = 0; j < gutOut.length; j++) {
                const element = array[j];
                sum += element;
            }
            return sum;
        }


        let newElement = sumGutOut(gutOut);
        array.push(newElement);

    }


    console.log(array.join(' '));

}
lastKNumbersSequence(8, 2);