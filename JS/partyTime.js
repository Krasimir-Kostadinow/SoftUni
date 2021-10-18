function partyTime(input) {
    let index = input.indexOf('PARTY');
    let arriveGuests = input.slice(index + 1);
    let fullList = input.slice(0, index);
    let objList = { 'vip': [], 'regular': [] };

    fullList.forEach(el => {

        if (isNaN(Number(el[0]))) {
            objList['regular'].push(el);
        } else {
            objList['vip'].push(el);
        }
    });

    for (const guest of arriveGuests) {
        let isExistsVip = objList['vip'].includes(guest);
        if (isExistsVip) {
            let index = objList['vip'].indexOf(guest);
            objList['vip'].splice(index, 1);
        }
        let isExistsRegular = objList['regular'].includes(guest);
        if (isExistsRegular) {
            let index = objList['regular'].indexOf(guest);
            objList['regular'].splice(index, 1);
        }

    }
 
    let output =     objList['vip'].concat(objList['regular']);
    console.log(output.length);
    output.forEach(el => {
        console.log(el);
    })




}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]


);