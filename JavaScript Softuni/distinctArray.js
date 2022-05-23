function distinctArray(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (!newArray.includes(element)) {
            newArray.push(element);
        }

    }
    console.log(newArray.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 7, 4, 1, 2]);