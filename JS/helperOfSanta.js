function helperOfSanta(input) {
    let key = Number(input.shift());
    let list = [];
    let i = 0;
    while (input[i] !== 'end') {
        let decrypt = '';
        let code = input[i];
        for (const el of code) {
            let charCode = el.charCodeAt();
            let newChar = String.fromCharCode(charCode - key);
            decrypt += newChar;
        }
        list.push(decrypt);
        i++;
    }

    let pattern = /@([A-Za-z]+)[^@\-!:>]*\!([G])!/;
    for (const el of list) {
        let nameChaild = pattern.exec(el);
      
        if (nameChaild !== null) {
            let result = nameChaild[1];
            console.log(result);
        }

    }

}
helperOfSanta(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    "DReh}e=<4lhzj1%K%",
    'end']

);