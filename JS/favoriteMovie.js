function favorireMovie(input) {
    let i = 0;
    let flag = false;
    let pointWinner = 0;
    let nameWinner = '';
    while (input[i] !== 'STOP') {
        if (i >= 7) {
            flag = true;
            break;
        }
        let currentMovie = input[i];
        let pointCurrentMovie = 0;
        let lengthName = Number(currentMovie.length);
        for (let j = 0; j < lengthName; j++) {
            let n = currentMovie.charCodeAt(j);
            if (n < 91 & n > 64) {
                pointCurrentMovie += (n - lengthName);
            } else if (n > 96 & n < 123) {
                pointCurrentMovie += (n - (2 * lengthName));
            } else {
                pointCurrentMovie += n;
            }
        }

        if (pointCurrentMovie > pointWinner) {
            pointWinner = pointCurrentMovie;
            nameWinner = currentMovie;
        }
        i++;
    }
    if (flag) {
        console.log('The limit is reached.');
    }
    console.log(`The best movie for you is ${nameWinner} with ${pointWinner} ASCII sum.`);

}
favorireMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"]);

