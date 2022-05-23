function guineaPig(input) {
    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let weightPig = Number(input[3]) * 1000;
    let days = 0;
    let isLack = false;

    for (let i = 0; i < 30; i++) {
        days++;
        food -= 300;
        if (days % 2 === 0) {
            hay -= food * 0.05;
        }
        if (days % 3 === 0) {
            cover -= weightPig / 3;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            isLack = true;
            break;
        }
    }
    if (!isLack) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    } else {
        console.log('Merry must go to the pet store!');
    }

}
guineaPig(["9",
"5",
"5.2",
"1"])

;