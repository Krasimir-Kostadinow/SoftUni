function favorireMovie(input) {
    let i = 0;
    let flag = false;
    let point = 0;
    while (input[i] !== 'STOP') {
        let currentMovie = input[i];
        let pointCurrentMovie = 0;
        for (let j = 0; j < currentMovie.length; j++) {
            let n = currentMovie.charCodeAt(j);
pointCurrentMovie += n;
        }

        if (i > 7) {
            flag = true;
            break;
        }
        i++;
    }


}
favorireMovie(["Matrix",
    "Breaking bad",
    "Legend",
    "STOP"]);
