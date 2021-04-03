function bitcoinMining(input) {
    let cashDesk = 0;
    let bitcoin = 0; 
    let days = 0;

    for (let i = 0; i < input.length; i++) {
        let currentDay = input[i];
        days++;
        let priceGoldDay = currentDay * 67.51;
        cashDesk += priceGoldDay;
        console.log(currentDay);

    }
    if (cashDesk >= 11949.16) {
cashDesk -= 11949.16;
bitcoin++;
    }
console.log(`Bought bitcoins: ${bitcoin}`);
if (days === 1) {
    console.log(`Day of the first purchased bitcoin: ${days}`);
}

}
bitcoinMining([100, 200, 300]);