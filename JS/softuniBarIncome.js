function softuniBarIncome(input) {
    let totalPrice = 0;
   let pattern = /%(?<costumer>[A-Z][a-z]+)%.*<(?<product>\w+)>.*\|(?<count>\d+)\|\D*(?<price>\d+\.?\d+)\$/;
    let i = 0;
    while (input[i] !== 'end of shift') {

        let el = input[i];
      

        if (pattern.test(el)) {
         let count = Number(pattern.exec(el).groups.count);
         let price = Number(pattern.exec(el).groups.price);
            let sumPrice = count * price;
            totalPrice += sumPrice;
            console.log(`${pattern.exec(el).groups.costumer}: ${pattern.exec(el).groups.product} - ${sumPrice.toFixed(2)}`);

        }

        i++;
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softuniBarIncome(
    ['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',  
    'end of shift']
    
    
);   