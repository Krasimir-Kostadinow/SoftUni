function bitcoinMining(input) {
    let cashDesk = 0;
    let bitcoin = 0;
    let days = 0;
    let day = 0;
    let flag = false;

    for (let i = 0; i < input.length; i++) {
        let currentDay = Number(input[i]);
        days++;
        if (days % 3 === 0) {
            currentDay *= 0.7;
        }
        let priceGoldDay = (currentDay * 67.51);
        cashDesk += priceGoldDay;
        let numBitcoin = Math.trunc(cashDesk / 11949.16);
        if (cashDesk >= 11949.16) {
            cashDesk -= 11949.16 * numBitcoin;
            bitcoin += numBitcoin;
        }
        if (bitcoin > 0 & day === 0) {
            flag = true;
            day = days;
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (flag) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${cashDesk.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);