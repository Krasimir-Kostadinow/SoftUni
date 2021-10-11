function bonusScoringSystem(input) {
    let numStudent = Number(input.shift());
    let numLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let attendance = input.map(el => Number(el));
    let maxBonus = 0;
    let maxAttendance = 0;

    for (let i = 0; i < attendance.length; i++) {
        let current = attendance[i];

        let totalBonus = current / numLectures * (5 + additionalBonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxAttendance = current;
        }
    }


    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);

}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
  ;