function matchDates(string) {
    let pattern = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]+)\2(?<year>\d{4})\b/g;
    let valid = pattern.exec(string);

    while (valid !== null) {
        console.log(`Day: ${valid.groups.day}, Month: ${valid.groups.month}, Year: ${valid.groups.year}`);
        valid = pattern.exec(string);
    }

}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");