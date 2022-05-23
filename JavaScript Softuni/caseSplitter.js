function caseSplitter(string) {
    let text = '';
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90 && i > 0) {
            text += (', ' + string[i]);
        } else {
            text += string[i];
        }
    }
    console.log(text);
}
caseSplitter('ThisIsSoAnnoyingToDo');