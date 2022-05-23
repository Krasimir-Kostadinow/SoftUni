function numberModification(firstNumber) {

    let currentNumber = firstNumber + '';

    let sum = 0;


    for (let i = 0; i < currentNumber.length; i++) {
        const element = Number(currentNumber[i]);
        sum += element;

        if (sum / currentNumber.length > 5) {
            break;
        } else if (sum / currentNumber.length <= 5 && i === currentNumber.length - 1) {
            currentNumber += 9;
        }


    }

    console.log(currentNumber);

}

numberModification(101);