function addAndRemove(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === 'add') {
            newArray.push(i + 1);
        } else if (element === 'remove') {
            newArray.pop();
        }
    }



    if (newArray.length < 1) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }


}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);