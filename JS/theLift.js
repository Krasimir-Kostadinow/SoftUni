function theLift(input) {
    let numPeopleQueue = Number(input[0]);
    let numFreeWagon = input[1].split(' ').map(el => Number(el));


    for (let i = 0; i < numFreeWagon.length; i++) {
        if (numPeopleQueue === 0) {
            break;
        }
        let currentWagon = numFreeWagon[i];
        let freePlaceInWagon = 4 - currentWagon;
        if (numPeopleQueue - freePlaceInWagon < 0) {
            numFreeWagon[i] = numPeopleQueue;
            numPeopleQueue -= numPeopleQueue;
            break;
        }

        if (currentWagon < 4) {

            numFreeWagon[i] = freePlaceInWagon + currentWagon;
            numPeopleQueue -= freePlaceInWagon;
        }

    }
    let isLiftFree = true;
    for (const wagon of numFreeWagon) {
        if (wagon < 4) {
            isLiftFree = false;
        }
    }
    if (numPeopleQueue === 0 && isLiftFree) {
        console.log(numFreeWagon.join(' '));
    } else if (numPeopleQueue === 0) {
        console.log('The lift has empty spots!');
        console.log(numFreeWagon.join(' '));
    } else if (numPeopleQueue > 0) {
        console.log(`There isn't enough space! ${numPeopleQueue} people in a queue!`);
        console.log(numFreeWagon.join(' '));
    }

}
theLift(
  
    [
        "0",
        "4 4 4"
       ]
       
       


);