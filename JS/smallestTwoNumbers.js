function smallestTwoNumbers(array) {

    let sortArray = array.sort((a, b) => {return (a - b)});
    let firstTwoNumber = sortArray.slice(0 , 2);
    console.log(firstTwoNumber.join(' '));
    
}
smallestTwoNumbers([30, 15, 50, 5]);