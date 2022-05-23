function movieProfit(input) {
    let nameMovie = input[0];
    let numDays = Number(input[1]);
    let numTicket = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentageForChinema = Number(input[4]);

    let priceForDay = numTicket * priceTicket;
    let profitTotalDays = priceForDay * numDays;
    let profitForChinema = (profitTotalDays * percentageForChinema) / 100;
    let profitForMovie = profitTotalDays - profitForChinema;

    console.log(`The profit from the movie ${nameMovie} is ${profitForMovie.toFixed(2)} lv.`);
}
movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])

