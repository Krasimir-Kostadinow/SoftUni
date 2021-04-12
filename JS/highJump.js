function highJump(input) {

    let desiredHeight = Number(input[0]);
    let startHeight = desiredHeight - 30;
    let numJump = 0;
    let flag = false;
    let unsuccessfulTry = 0;

    for (let i = 1; i <= input.length; i++) {
        let currentJump = Number(input[i]);
        numJump++;
        if (currentJump > startHeight) {
            startHeight += 5;
            unsuccessfulTry = 0;
        } else {
            unsuccessfulTry++;
        }
        if (unsuccessfulTry >= 3) {
            startHeight = currentJump;
            break;
        }
        if (currentJump >= desiredHeight) {
            startHeight = desiredHeight;
            flag = true;
            break;
        }

    }
    if (flag) {
        console.log(`Tihomir succeeded, he jumped over ${startHeight}cm after ${numJump} jumps.`);
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
    "235"])



