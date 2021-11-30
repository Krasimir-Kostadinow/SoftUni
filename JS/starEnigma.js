function starEnigma(input) {
    function decryption(str, matchLetters) {
        let pattern = /[starSTAR]/;
        let output = '';
        let counter = 0;
        for (let el of str) {
            if (pattern.test(el)) {
                counter++;
            }
        }
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            let newLetter = String.fromCharCode(charCode - counter);
            output += newLetter;
        }
        return output;
    }

    let numMessages = Number(input.shift());
    let matchLetters = ['s', 't', 'a', 'r'];
    let planets = { attacked:[], destroyed:[] };
    let pattern = /@([A-Z][a-z]+)\w*\W*:\d+\w*\W*!([AD])!\w*\W*->\D*\d+/;
    for (let i = 0; i < input.length; i++) {
        let str = input[i];
        let decrypt = decryption(str, matchLetters);
        if (pattern.test(decrypt)) {
            let planet = pattern.exec(decrypt);
            let typeAttack = planet[2];
            if (typeAttack === 'A') {
                planets.attacked.push(planet[1]);
            } else if (typeAttack === 'D') {
                planets.destroyed.push(planet[1]);
            }

        }
    }
for (const type in planets) {
planets[type].sort((a, b) => a.localeCompare(b));
if (type === 'attacked') {
    console.log(`Attacked planets: ${planets[type].length}`);
    planets[type].forEach(el => {
        console.log(`-> ${el}`);
    });
} else {
    console.log(`Destroyed planets: ${planets[type].length}`);
    planets[type].forEach(el => {
        console.log(`-> ${el}`);
    });
}

}
}
starEnigma(
    ['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
    
    
    
);