function valueOfString(input) {
    let string = input[0];
    let command = input[1];
    let totalSum = 0;



    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (command === 'UPPERCASE') {
            if (charCode >= 65 && charCode <= 90) {
                totalSum += charCode;
            }
        } else if (command === 'LOWERCASE') {
            if (charCode >= 97 && charCode <= 122) {
                totalSum += charCode;
            }
        }

    }
    console.log(`The total sum is: ${totalSum}`);
}
valueOfString(
    ['AC/DC',
'UPPERCASE']

);