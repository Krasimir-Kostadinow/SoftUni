function softuniReception(input) {

    let numStudent = Number(input.pop());
    let hours = 0;
    let breaks = 0;
let isBreak = true;
    while (numStudent > 0) {

        for (let i = 0; i < input.length; i++) {
            let currentEmployer = Number(input[i]);
            numStudent -= currentEmployer;
            if (numStudent <= 0) {
                isBreak = false;
                break;
            }
        }
        hours++;
        if (hours % 3 === 0 && isBreak) {
            breaks++;
        }
    }
    let time = hours + breaks;
    console.log(`Time needed: ${time}h.`);
}
softuniReception(['5','5','5','45']);