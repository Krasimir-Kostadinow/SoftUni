function demo(params) {

    if (params > 0) {
        console.log('positive');
    }
    if (params > 0 && params === 3) {
        console.log('positive and 3');
    }
    if (params === 0) {
        console.log('result is null');
    }
    if (typeof params === 'string') {
        console.log('hello');
    }



}
demo(3);