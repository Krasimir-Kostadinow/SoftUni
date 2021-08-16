function pop(array) {
    let endElement = array[array.length - 1];
    let newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        let element = array[i];
        if (i === 0) {
            newArray += '[';
        }


        if (i === array.length - 2) {
            newArray += element;
        } else {
            newArray += element + ', ';
        }

        if (i === array.length - 2) {
            newArray += ']';
        }



    }
    console.log(typeof array);
    console.log(typeof     newArray);

}
pop([1, 2, 3, 4, 5]);