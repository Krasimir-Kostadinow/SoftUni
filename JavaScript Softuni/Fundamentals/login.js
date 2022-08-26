function login(arr) {
    let userName = arr.shift();
    let counter = 0;

    let pass = userName.split('').reverse().join('');

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
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);