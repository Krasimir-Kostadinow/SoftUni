function browserHistory(object, array) {

    function action(command, el, element) {
        if (command === 'Close') {
        let isExisting = object["Open Tabs"].includes(el);

        if(isExisting) {
            object["Recently Closed"].push(el);
            let index = object["Open Tabs"].indexOf(el);
            object["Open Tabs"].splice(index, 1);
            object["Browser Logs"].push(element.join(' '));
        }
           
        } else if (command === 'Open') {
            object["Open Tabs"].push(el);
            object["Browser Logs"].push(element.join(' '));
        } else if (command === 'Clear') {
            object["Open Tabs"] = [];
            object["Recently Closed"] = [];
            object["Browser Logs"] = [];
        }

    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' ');
        let command = element[0];
        let el = element[1];

        action(command, el, element);

    }

    for (const key in object) {
        let result = object[key];
        
        if (key === "Browser Name") {
            console.log(object[key]);
        } else {
            let output = result.join(', ');
            console.log(`${key}: ${output}`);
        }
    }


}
browserHistory(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter", "Close Wikipedia"]

 

);