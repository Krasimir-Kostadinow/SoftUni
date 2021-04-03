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
        let priceGoldDay = (currentDay * 67.51).toFixed(2);
        cashDesk += Number(priceGoldDay);
        if (cashDesk >= 11949.16) {
            cashDesk -= 11949.16;//error
            bitcoin++;
        }
        if (bitcoin === 1) {
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
bitcoinMining([3124.15, 504.212, 2511.124]);