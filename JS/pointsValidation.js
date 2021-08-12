function pointsValidation(array) {

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    function hypotenuse(a, b) {
       
        let result =  Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        return result;

    }
    let c1 = hypotenuse(x1, y1);
    let c2 = hypotenuse(x2, y2);
    let c3 = distanceBetweenPoint();
  

  

    function distanceBetweenPoint() {

    let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    return checkThree;

    }

    if (c1 === Math.trunc(c1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (c2 === Math.trunc(c2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (c3 === Math.trunc(c3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
pointsValidation([2, 1, 1, 1]);