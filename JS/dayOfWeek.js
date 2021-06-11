function dayOfWeek(day) {
    day = Number(day);
    let isFlag = false;
    let result = '';

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    for (let index = 0; index < days.length; index++) {
        let currentDay = days[index];

        if (day === index + 1) {
            result = currentDay;
            isFlag = true;
            break;
       
        }
    }
console.log(isFlag ? result : 'Invalid day!');
    }
    dayOfWeek(6);