function pyramidOfKing(base, heightBase) {
    let numFloor = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let floor = Math.round(base / 2)
    for (let i = base; i > 0; i -= 2) {
        let currentFloor = i;
        numFloor++;
        let num = currentFloor * currentFloor;
        let currentNumStone = (currentFloor - 2) * (currentFloor - 2);
        let currentNumMarble = num - currentNumStone;
        if (numFloor === floor) {
            gold += num * heightBase;
            break;
        }
        if (numFloor % 5 === 0) {
            lapis += currentNumMarble * heightBase;
            currentNumMarble = 0;
        }
        stone += currentNumStone * heightBase;
        marble += currentNumMarble * heightBase;

    }
    let pyramidHeight =  heightBase * numFloor;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}
pyramidOfKing(23, 0.5);