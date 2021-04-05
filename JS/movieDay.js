function movieDay(input) {
    let needTotalTime = Number(input[0]);
    let numScene = Number(input[1]);
    let timeScene = Number(input[2]);

    let training = needTotalTime * 0.15;
    let timeMovie = (numScene * timeScene) + training;
    let residue = Math.abs(timeMovie - needTotalTime);

    if (timeMovie <= needTotalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.trunc(residue)} minutes left!"`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.trunc(residue)} minutes`);
    }

}
movieDay(["60",
    "15",
    "3"]);
