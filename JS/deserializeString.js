function deserializeString(input) {
    let serialize = {};
    let string = '';
    let i = 0;
    let lengthStr = 0
    while (input[i] !== 'end') {
        let el = input[i].split(':');
        let letter = el[0];
        let index = el[1].split('/').map(el => Number(el));
        serialize[letter] = index;
        lengthStr += index.length;
        i++;
    }
    ;
    // for (const key in serialize) {
    //     let lenGth = serialize[key].length;
    //     lengthStr += lenGth;
    // }
    for (let i = 0; i < lengthStr; i++) {
        for (const key in serialize) {
            if (serialize[key].includes(i)) {
                string += key;
            }
        }

    }
    console.log(string);
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']

);