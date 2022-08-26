function coockingByNumbers(startNum, operant1, operant2, operant3, operant4, operant5) {

    let currentNum = Number(startNum);
    for (let i = 1; i <= 5; i++) {
        let operant = arguments[i];
        switch (operant) {
            case 'chop':
                currentNum = currentNum / 2;
                break;
            case 'dice':
                currentNum = Math.sqrt(currentNum);
                break;
            case 'spice':
                currentNum = currentNum + 1;
                break;
            case 'bake':
                currentNum = currentNum * 3;
                break;
            case 'fillet':
                currentNum = currentNum * 0.80;
                break;

        }
        console.log(currentNum);
    }
}
coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); 