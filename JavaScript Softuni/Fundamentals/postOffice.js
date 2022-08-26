function postOffice(input) {
    let book = {};
    let array = input[0].split('|');
    let patternFirst = /([#$%*&])([A-Z]+)\1/g;
    let patternSecond = /(\d{2}):(\d{2})/g;

    let capitalLetter = patternFirst.exec(array[0]);
    let charCode = patternSecond.exec(array[1]);
    while (charCode !== null) {

        let charCodeLetter = Number(charCode[1]);
        let lengthLetter = Number(charCode[2]);
        if (capitalLetter[2].includes(String.fromCharCode(charCodeLetter))) {

            book[String.fromCharCode(charCodeLetter)] = lengthLetter;

        }
        charCode = patternSecond.exec(array[1]);
    }

    for (const letter of capitalLetter[2]) {
        let patternWord = new RegExp(`${letter}\[a-z\\S]{${book[letter]}}`, 'g');
        let result = patternWord.exec(array[2]);
        if (result !== null) {
            console.log(result[0]);
        }

    }

}
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);

