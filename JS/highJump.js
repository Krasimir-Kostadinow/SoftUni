function highJump(input) {

    let desiredHeight = Number(input[0]);
    let startHeight = desiredHeight - 30;
    let numJump = 0;
    let flag = false;
    
    for (let j = 1; j <= 3; j++) {
        if (flag) {
            break;
        }
        for (let i = 1 + numJump; i <= input.length; i++) {
            let currentJump = Number(input[i]);
            numJump++;
            if (currentJump > startHeight) {
                startHeight += 5;
                j = 1;
            } else {
                break;
            }
            if (currentJump >= desiredHeight) {
                startHeight = currentJump;
                flag = true;
                break;
            }
        }
    }
    if (flag) {
        console.log(`Tihomir succeeded, he jumped over ${desiredHeight}cm after ${numJump} jumps.`);
    } else {
        console.log(`Tihomir failed at ${startHeight}cm after ${numJump} jumps.`);
    }
}
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"]);





