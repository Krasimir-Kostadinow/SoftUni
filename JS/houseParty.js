function houseParty(arrayGuests) {
    let listGuests = [];
    for (let i = 0; i < arrayGuests.length; i++) {
        let action = arrayGuests[i].split(' ');
        let nameOfGuest = action[0];
        if (action.length === 3) {
            if (listGuests.includes(nameOfGuest)) {
                console.log(`${nameOfGuest} is already in the list!`);
            } else {
                listGuests.push(action[0]);
            }

        } else if (action.length === 4) {

            if (listGuests.includes(nameOfGuest)) {
                for (let j = 0; j < listGuests.length; j++) {
                    let element = listGuests[j];
                    if (element === nameOfGuest) {
                        listGuests.splice(j, 1);
                    }
                }
            } else {
                console.log(`${nameOfGuest} is not in the list!`);
            }


        }

    }

    for (let j = 0; j < listGuests.length; j++) {
        const element = listGuests[j];
        console.log(element);
    }
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);