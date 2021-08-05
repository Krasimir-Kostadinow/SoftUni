


function loadingBar(num) {

    function loading(n) {
        let resultLoading = '';
        let parcent = n / 10;
    
        for (let i = 1; i <= 10; i++) {
            if (i <= parcent) {
                resultLoading += '%';
            } else {
                resultLoading += '.';
            }
    
        }
        return resultLoading;
    }

    let result = loading(num);
    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');


    } else if (num < 100) {

        console.log(`${num}% [${result}]`);
        console.log('Still loading...');
    }
}
loadingBar(100);