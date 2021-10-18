function neighborhoods(input) {
    let neighborhoods = input.shift().split(', ');

    let homeBook = new Map();
    neighborhoods.forEach(el => {
        homeBook.set(el, [])
    });

    for (const el of input) {
        let element = el.split(' - ');
        let [neighborhood, inhabitant] = element;
        let isExist = homeBook.has(neighborhood);
        if (isExist) {
            let inhabitants = homeBook.get(neighborhood);
            inhabitants.push(inhabitant);
        }
    }

    let sorted = Array.from(homeBook);
    sorted.sort((a, b) => {
        return b[1].length - a[1].length;
    });

    for (const [neighborhood, inhabitants] of sorted) {
        console.log(`${neighborhood}: ${inhabitants.length}`);
        inhabitants.forEach(el => {
            console.log(`--${el}`);
        });
    }

}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Herald Street - Keity',
'Abbey Street - Liam',
'Bright Mews - Mark',
'Abbey Street - John']

);