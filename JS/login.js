function login(arr) {
    let userName = arr.shift();
    let pass = '';
    for (let i = userName.length - 1; i >= 0; i--) {
        let currentLetter = userName[i];
        pass += currentLetter;
    }
    let counter = 0;
    for (let j = 0; j <= arr.length; j++) {
        let currentStr = arr[j];
        if (currentStr === pass) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            counter++;
            if (counter > 3) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }

    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);