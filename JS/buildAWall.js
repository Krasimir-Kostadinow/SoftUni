function buildAWall(array) {
    let newArray = array;
    let day = 0;
    while (check(newArray)) {
        newArray = newArray.map((el) => {
            if (el < 30) {
                el += 1;
            }
            return el;
        });
        day++;
    }


    function check(array) {
        let isFlag = true;
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element === 30) {
                counter++;
            }
            if (counter === array.length) {
                isFlag = false;
            }
        }
        return isFlag;
    }


return day;


}
console.log(buildAWall([21, 25, 28]));
