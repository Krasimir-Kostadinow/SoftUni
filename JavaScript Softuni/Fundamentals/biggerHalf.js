function biggerHalf(array) {
    array.sort((a, b) => {
        return a - b;
    });
    let middleIndex = Math.floor(array.length / 2);
    let slice = array.slice(middleIndex, array.length);

    console.log(slice);
}
biggerHalf([4, 7, 2, 5]);