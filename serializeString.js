function serializeString(input) {
    let string = input[0];
    let serialize = {};
    for (let i = 0; i < string.length; i++) {
        if (serialize.hasOwnProperty(string[i])) {
             serialize[string[i]].push(i);
        } else {
            serialize[string[i]] = [i];
        }        
    }

    for (const key in serialize) {
       console.log(`${key}:${serialize[key].join('/')}`);
    }

}
serializeString(["avjavamsdmcalsdm"]);