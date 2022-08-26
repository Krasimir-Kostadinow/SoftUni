function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        function palindrome(integer) {
            let result;
            let strNum = integer + '';
            for (let j = 0; j < Math.floor((strNum.length) / 2); j++) {

                let firstNum = Number(strNum[j]);
                let endNum = Number(strNum[strNum.length - (1 + j)]);

                if (firstNum === endNum) {
                    result = true;
                } else {
                    result = false;
                    break;
                }

            }
            return result;
        }
        console.log(palindrome(num));
    }


}
palindromeIntegers([5327235, 235222, 1010]);
