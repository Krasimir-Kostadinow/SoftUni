function series(input) {
    let budget = Number(input[0]);
    let numSeries = Number(input[1]);
    let priceSeries = 0;

    for (let i = 2; i < input.length; i++) {
        let currentName = input[i++];
        let currentPrice = Number(input[i]);
        switch (currentName) {
            case 'Thrones':
                currentPrice *= 0.5;
                break;
            case 'Lucifer':
                currentPrice *= 0.6;
                break;
            case 'Protector':
                currentPrice *= 0.7;
                break;
            case 'TotalDrama':
                currentPrice *= 0.8;
                break;
            case 'Area':
                currentPrice *= 0.9;
                break;
        }
        priceSeries += currentPrice;
    }
    let residue = Math.abs(budget - priceSeries);

    if (budget >= priceSeries) {
console.log(`You bought all the series and left with ${residue.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${residue.toFixed(2)} lv. more to buy the series!`);
    }
}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"]);

