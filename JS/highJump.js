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
                startHeight -= 5;
                flag = true;
                break;
            }
        }
    }
    if (flag) {
        console.log(`Tihomir succeeded, he jumped over ${startHeight}cm after ${numJump} jumps.`);
    } else {
        console.log(`Tihomir failed at ${startHeight}cm after ${numJump} jumps.`);
    }
}
highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"]);






