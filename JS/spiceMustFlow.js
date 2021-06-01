// function spiceMustFlow(startYield) {
//     let days = 0;
//     let leaving = 0;
//     if (startYield >= 100) {
//         let i = startYield;
//         while (i >= 100) {
//             let currentYield = i;
//             days++;
//             leaving += currentYield - 26;
//             i -= 10;
//         }
//         console.log(days);
//         console.log(leaving - 26);
    
//     } else {
//         console.log(0);
//         console.log(0);
//     }
// }
// spiceMustFlow(-15);
function spiceMustFlow(startingYield) {

    let totalExtract = 0;

    let days = 0;



    while (startingYield >= 100) {



        totalExtract += (startingYield - 26);

        // if (startingYield >= 26) {

        // }



        startingYield -= 10;

        days++;

    }



    // if (startingYield < 100) {

    // totalExtract -= 26;

    // }



    totalExtract -= 26;

    if (totalExtract < 0) {

        totalExtract = 0;

    }



    console.log(days);

    console.log(totalExtract);

}
spiceMustFlow(100);