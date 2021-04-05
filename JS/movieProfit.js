function movieProfit(input) {
    let nameMovie = input[0];
    let numDays = Number(input[1]);
    let numTicket = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentageForChinema = Number(input[4]);

    let priceForDay = numTicket * priceTicket;
    let profitTotalDays = priceForDay * numDays;

    console.log(profitTotalDays)
}
movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"]);
