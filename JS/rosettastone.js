function risettaStone(input) {
    let lengthOfTemplate = Number(input.shift());
    let templateMatrix = createOfTemplate(input, lengthOfTemplate);
    function createOfTemplate(array, rowTemplate) {
        let result = [];
        for (let i = 0; i < rowTemplate; i++) {
            let currentRow = array.shift().split(' ').map(x => Number(x));
            result.push(currentRow);
            
        }
        return result;
    }

    let gut = input.slice(0);
    let matrix = gut.map(x => x.split(' ').map(x => Number(x)));



    console.log(matrix);
}
risettaStone([ '2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ]
);