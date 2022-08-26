function treasureFinder(input) {

    function finder(code, key) {
        let id = '';
        let i = 0;

        for (let j = 0; j < code.length; j++) {
            let charCodeStr = code.charCodeAt(j);
            let newCharCode = Math.abs(charCodeStr - key[i]);
            let character = String.fromCharCode(newCharCode);

            id += character;

            if (i === key.length - 1) {
                i = 0;
            } else {
                i++;
            }

        }

        return id;

    }
    function typeTreasureAndCordinate(id) {
        let output = [];
        let arrType = id.split('&');
        let type = arrType[1];
        let coordinates = '';
        let isCoordinates = false;
        for (const letter of id) {

            if (letter === '>') {
                isCoordinates = false;
            }
            if (isCoordinates) {
                coordinates += letter;
            }

            if (letter === '<') {
                isCoordinates = true;
            }
        }

        output.push(type, coordinates);
        return output;
    }

    let key = input.shift().split(' ').map(el => Number(el));

    let i = 0;
    while (input[i] !== 'find') {

        let code = input[i];
        let id = finder(code, key);
        let [type, coordinates] = typeTreasureAndCordinate(id);

        console.log(`Found ${type} at ${coordinates}`);
        i++;
    }
}
treasureFinder(['1 4 2 5 3 2 1',
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
'find']

);