function nxnMatrixs(num) {
    
    function rows() {
        let row = '';
        for (let i = 0; i < num; i++) {
            row += num + ' ';
        }
        return row;
    }


    for (let i = 0; i < num; i++) {
        console.log(rows());
    }



}
nxnMatrixs(7);