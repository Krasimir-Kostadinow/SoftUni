function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1);
    console.log(nextDay);
    let newYear = nextDay.getFullYear();
    console.log(newYear);
    let newMonth = nextDay.getMonth();
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016 ,11, 31);
