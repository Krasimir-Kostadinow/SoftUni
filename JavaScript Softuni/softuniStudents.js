function softuniStudents(input) {
    let softuni = {};
    for (let el of input) {
        if (el.includes(':')) {
            let [course, capacity] = el.split(': ');
            capacity = Number(capacity);
            if (softuni.hasOwnProperty(course)) {
                softuni[course][0] += capacity;
            } else {
                softuni[course] = [capacity];
            }

        } else if (el.includes('@')) {
            let student = el.split(' ');
            let userCredit = student[0].slice(0, student[0].length - 1);
            let [user, credit] = userCredit.split('[');
            credit = Number(credit);
            let email = student[3];
            let courseStudent = student[5];
            let isExists = softuni.hasOwnProperty(courseStudent);
            if (isExists && softuni[courseStudent][0] > 0) {
                softuni[courseStudent][0]--;
                softuni[courseStudent].push([credit, user, email]);
            }

        }
    }


    for (let el in softuni) {
        let firstEl = softuni[el].shift();
        softuni[el].sort((a, b) => {
            let A = a[0];
            let B = b[0];
            return B - A;
        });
        softuni[el].unshift(firstEl);
    }



    let sorted = [];
    for (let key in softuni) {
        sorted.push([key]);
        let index = -1;
        for (let i = 0; i < sorted.length; i++) {
            let isExists = sorted[i].includes(key);
            if (isExists) {
                index = i;
            }
        }
        sorted[index].push(softuni[key]);
    }

    sorted.sort((a, b) => {
        return b[1].length - a[1].length;
    });

    for (let el of sorted) {

        console.log(`${el[0]}: ${el[1][0]} places left`);
        for (let i = 1; i < el[1].length; i++) {
            console.log(`--- ${el[1][i][0]}: ${el[1][i][1]}, ${el[1][i][2]}`);
        }
    }
}
softuniStudents(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
);