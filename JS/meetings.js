function meetings(input) {
    let bookMeetings = {};
    for (const el of input) {
        let meeting = el.split(' ');
        let [day, name] = meeting;
        let keys = Object.keys(bookMeetings);
        // let value = Object.values(bookMeetings);
        let isScheduled = keys.includes(day);
        // let isRecurringName = value.includes(name);
        if (isScheduled) {
          console.log(`Conflict on ${day}!`);
        } 
        // else if (isRecurringName) {
        //     console.log(`Conflict on ${day}!`);
        // } 
        else {
            bookMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

for (const key in bookMeetings) {
  console.log(`${key} -> ${bookMeetings[key]}`);
}

}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

);