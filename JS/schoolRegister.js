function schoolRegister(input) {
    class Object {
        constructor(name, grade, averageScore) {
            this.Student = name;
            this.Grade = grade;
            this.Score = averageScore;
        }
    }
    let newArr = [];
    for (let obj of input) {

        let object = obj.split(', ').map(el => el.split(': '));

        let name = object[0][1];
        let grade = Number(object[1][1]);
        let averageScore = Number(object[2][1]);

        if (averageScore > 3) {
            let dateObject = new Object(name, grade, averageScore);
            newArr.push(dateObject);
        }
    }

    newArr.sort((a, b) => {
        return a.Grade - b.Grade;
    });

    let workArr = newArr.slice(0);

    while (workArr.length !== 0) {
        let currentGrade = workArr[0].Grade;
        let listStudent = [];
        let score = [];
        for (let i = 0; i < workArr.length; i++) {
            let obj = workArr[i];
            if (obj.Grade === currentGrade) {
                listStudent.push(obj.Student);
                score.push(obj.Score);
                workArr.splice(i, 1);
                i--;
            }

        }
        console.log(`${currentGrade + 1} Grade`);
        console.log(`List of students: ${listStudent.join(', ')}`);
        let averageGrade = score.reduce((acc, el) => {
            acc += el;
            return acc;
        }, 0);
        let average = averageGrade / score.length;
        console.log(`Average annual grade from last year: ${average.toFixed(2)}`);
        console.log('');
    }




}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    
);