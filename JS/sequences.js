function sequences(input) {

    let inputArr = input.map(el => JSON.parse(el));
    inputArr.map(el => el.sort((a, b) => b - a));

    function compare(firstArr, secondArr) {
        let isFlag = true;
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                isFlag = false;
            }
        }
        return isFlag;
    }

    for (let j = 0; j < inputArr.length-1; j++) {
        let firstArr = inputArr[j];

        for (let i = j + 1; i < inputArr.length; i++) {

            let secondArr = inputArr[i];
            if (firstArr.length === secondArr.length) {
                if (compare(firstArr, secondArr)) {
                    inputArr.splice(i, 1,);
                    j--;
                    break;

                }
            }
        }
    }
    inputArr.sort((a, b) => a.length - b.length);
    for (const arr of inputArr) {
        console.log(`[${arr.join(', ')}]`);
    }
}

sequences(
    [

        // "[7.14, 7.180, 7.339, 80.099]",
        // "[7.339, 80.0990, 7.140000, 7.18]",
        // "[7.339, 7.180, 7.14, 80.099]",
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"

    ]

);