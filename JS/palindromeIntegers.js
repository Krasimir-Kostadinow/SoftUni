function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        function palindrome(integer) {
            let result;
            let strNum = integer + '';
            let firstNum = Number(strNum[0]);
            let endNum = Number(strNum[strNum.length - 1]);

            if (firstNum === endNum) {
                result = true;
            } else {
                result = false;
            }
            return result;
        }
        console.log(palindrome(num));
    }


}
palindromeIntegers([32,2,232,1010]);
