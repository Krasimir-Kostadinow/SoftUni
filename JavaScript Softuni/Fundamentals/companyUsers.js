function companyUsers(input) {
    let list = {};
    for (let el of input) {
        let [company, id] = el.split(' -> ');
        if (list.hasOwnProperty(company)) {
            let isExists = list[company].includes(id);
            if (!isExists) {
                list[company].push(id);
            }

        } else {
            list[company] = [id];
        }
    }

//   for (let company in list) {
//     list[company].sort((a, b) => a.localeCompare(b));
//   }
    let arr = Object.entries(list);
    arr.sort((a, b) => a[0].localeCompare(b[0]));
for (const el of arr) {
    console.log(el[0]);
    el[1].forEach(element => {
        console.log(`-- ${element}`);
    });
}

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    
    );