function passwordValidator(pass) {


    function validCharacters(letters) {

        let validPassLength = false;
        let countSymbol = letters.length
        if (countSymbol < 6 || countSymbol > 10) {
            validPass = false;
            validPassLength = true;
           
        }
        return validPassLength;

    }

    function validNumDigits(text) {
        let counterDigits = 0;
        let validDigits = false;
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            let numSymbol = element.charCodeAt();

            if (numSymbol >= 48 && numSymbol <= 57) {
                counterDigits += 1;
            }
        }
        if (counterDigits < 2) {
          
            validDigits = true;

        }
        return validDigits;
    }


    function validLetterAndDigits(word) {

        let isFlag = false;
        let validSymbol = false;

        for (let i = 0; i < word.length; i++) {
            const element = word[i];
            let numSymbol = element.charCodeAt();

            if (numSymbol < 48) {
                isFlag = true;
            } else if (numSymbol > 57 && numSymbol < 65) {
                isFlag = true;
            } else if (numSymbol > 90 && numSymbol < 97) {
                isFlag = true;
            } else if (numSymbol > 122) {
                isFlag = true;
            }
        }
        if (isFlag) {
          
            validSymbol = true;
        }
        return validSymbol;

    }
    
    function validPass() {
        let result = false;
        if (validCharacters(pass) === false && validNumDigits(pass) === false && validLetterAndDigits(pass) === false) {
            result = true;
        }
        return result;
    }



    if (validPass()) {
        console.log('Password is valid');
    }

    if (validCharacters(pass)) {
        console.log('Password must be between 6 and 10 characters');
    }
  
    if (validLetterAndDigits(pass)) {
        console.log('Password must consist only of letters and digits');
    }
    if (validNumDigits(pass)) {
        console.log('Password must have at least 2 digits');
    }

}
passwordValidator('Pa$s$s');