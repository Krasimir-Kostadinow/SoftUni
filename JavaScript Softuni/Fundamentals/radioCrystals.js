function radioCrystals(array) {
    let finishCristals = array[0];
    let startCristals = array[1];
    console.log(`Processing chunk ${startCristals} microns`);
    function gut(cristal) {
        let counterGut = 0;
        while (startCristals >= finishCristals) {
            if (startCristals / 4 < finishCristals) {
                break;
            }
            startCristals /= 4;
            counterGut++;
        }
        let result = `Cut x${counterGut}`
        return result;
    }
  console.log(gut(startCristals));
  function transportAndWash() {
      startCristals = Math.floor(startCristals);
      let result = 'Transporting and washing';
      return result;
  }
  console.log(transportAndWash());
  function lap() {
    let counterLap = 0;
    while (startCristals >= finishCristals) {
        if (startCristals - (startCristals * 0.2) < finishCristals) {
            break;
        }
        startCristals -= startCristals * 0.2;
        counterLap++;
    }
    let result = `Lap x${counterLap}`
    return result;
}
console.log(lap());
console.log(transportAndWash());

function grind() {
    let counterGrind = 0;
    while (startCristals >= finishCristals) {
        if ((startCristals - 20) < finishCristals) {
            break;
        }
        startCristals -= 20;
        counterGrind++;
    }
    let result = `Grind x${counterGrind}`
    return result;
}
console.log(grind());
console.log(transportAndWash());
function etch() {
    let counterEtch = 0;
    while (startCristals >= finishCristals) {
        if (finishCristals - startCristals > 1) {
            break;
        }
        startCristals -= 2;
        counterEtch++;
    }
    let result = `Etch x${counterEtch}`
    return result;
}
console.log(etch());
console.log(transportAndWash());
function xRay() {
    startCristals += 1;
    let result = `X-ray x1`
    return result;
}
console.log(xRay());
console.log(`Finished crystal ${startCristals} microns`);
}
radioCrystals([1375, 1400]);