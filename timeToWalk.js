function timeToWalk(steps, footprint, speed) {

    let distance = steps * footprint;
    let numBreak = Math.trunc(distance / 500);
    let time = distance / speed / 1000 * 60;
    let totalTime = time + numBreak;
    let hour = Math.trunc(totalTime / 60);
    let min = Math.trunc(totalTime % 60);
    let sec = Math.round((totalTime % 60) * 60) % 60;

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    console.log(`${hour}:${min}:${sec}`);
}
timeToWalk(2564, 0.70, 2.5);