function favorireMovie(input) {
    let i = 0;
    let flag = false;
    let point = 0;
    while (input[i] !== 'STOP') {
        let currentMovie = input[i];
        let pointCurrentMovie = 0;
        let lenghtName = currentMovie.length;
        for (let j = 0; j < lenghtName; j++) {
            let n = currentMovie.charCodeAt(j);
            if (n < 91 & n > 64) {
                pointCurrentMovie += (n - lenghtName);
            } else if (n > 96 & n < 123) {
                pointCurrentMovie += (n - (2 * lenghtName));
            } else {
                pointCurrentMovie += n;
            }
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
