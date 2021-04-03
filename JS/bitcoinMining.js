function bitcoinMining(input) {
    let cashDesk = 0;
    let bitcoin = 0; 
    let days = 0;

    for (let i = 0; i < input.length; i++) {
        let currentDay = input[i];
        days++;
    if (days % 3 === 0) {
        currentDay *= 0.7; 
    }
    let priceGoldDay = currentDay * 67.51;
    cashDesk += priceGoldDay;
    }
    if (cashDesk >= 11949.16) {
cashDesk -= 11949.16;
bitcoin++;
    }
console.log(`Bought bitcoins: ${bitcoin}`);
if (bitcoin === 1) {
    console.log(`Day of the first purchased bitcoin: ${days}`);
}
console.log(`Left money: ${cashDesk.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);