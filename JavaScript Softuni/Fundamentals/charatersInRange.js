function charatersInRange(firstSymbol, secondSymbol) {

    let firstNum = firstSymbol.charCodeAt();
    let secondNum = secondSymbol.charCodeAt();
    let result = '';
    if (secondNum < firstNum) {
        for (let i = secondNum + 1; i < firstNum; i++) {

            let str = String.fromCharCode(i);
            result += str + ' '

        }
    } else {
        for (let i = firstNum + 1; i < secondNum; i++) {

            let str = String.fromCharCode(i);
            result += str + ' '

        }
    }
    console.log(result);

}
charatersInRange('#', ':');