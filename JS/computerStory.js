function computerStory(input) {
    let totalPrice = 0;
    let typeCostumer = '';
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element === 'special' || element === 'regular') {
            typeCostumer = element;
            break;
        }
        if (Number(element) < 0) {
            console.log("Invalid price!");
        } else {
            totalPrice += Number(element);
        }
 
    }

    let sumOfTaxes = totalPrice * 1.2;
    let taxes = sumOfTaxes - totalPrice;
    if (typeCostumer === 'special') {
        sumOfTaxes *= 0.90;
    }
    if (sumOfTaxes < 0) {
        console.log("Invalid price!");
    } else if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${sumOfTaxes.toFixed(2)}$`);
    }

}
computerStory(([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    

    
);