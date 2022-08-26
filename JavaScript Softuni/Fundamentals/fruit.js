function fruit(fruitName, weight, price) {
    let kgWeight = weight / 1000;
    let money = kgWeight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${fruitName}.`);    
}
fruit('apple', 1563, 2.35);