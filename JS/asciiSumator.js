function asciiSumator(input) {
    let firstCaracter = input[0].charCodeAt();
    let lastCaracter = input[1].charCodeAt();
    let string = input[2];
    let sum = 0;
    let bufer = 0;
    if (firstCaracter > lastCaracter) {
        bufer = firstCaracter;
        firstCaracter = lastCaracter;
        lastCaracter = bufer;
    }
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if(charCode > firstCaracter && charCode < lastCaracter) {
            sum += charCode;
        }
  
 
    }
    console.log(sum);
}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']


);