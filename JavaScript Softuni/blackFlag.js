function blackFlag(input) {
    let numDays = Number(input[0])
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let plunder = 0;


    for (let i = 1; i <= numDays; i++) {
        plunder += dailyPlunder;
        if (i % 3 === 0) {
            plunder += dailyPlunder * 0.5;
        } 
        if (i % 5 === 0) {
       plunder -= (plunder * 0.3);
        }
    }


    
    if (plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = (plunder / expectedPlunder) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }


}
blackFlag(["10",
"20",
"380"]);
