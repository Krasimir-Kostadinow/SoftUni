function winningTicket(string) {


    let patternJackpot = /[#]{20}|[$]{20}|[\^]{20}|[@]{20}/;
    let patternProfit = /(?=.{20}).*?(?=(?<ch>[@#$^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;
    let patternSplit = /\s*,\s*/gm;
    let input = string.split(patternSplit);

    for (const ticket of input) {

        if (ticket.length !== 20) {
            console.log('invalid ticket');
        } else if (patternJackpot.test(ticket)) {
            console.log(`ticket "${ticket}" - 10${ticket[0]} Jackpot!`);
        } else if (patternProfit.test(ticket) && ticket.length === 20) {
            let result = patternProfit.exec(ticket);
            console.log(`ticket "${ticket}" - ${result[2].length}${result[1]}`);
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eem1@@@@@@ey');