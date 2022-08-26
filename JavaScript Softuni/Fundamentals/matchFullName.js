function matchPhoneNumber(string) {
    let output = [];
    let pattern = /\+359([-])\d[-]\d{3}[-]\d{4}\b|\+359([ ])\d[ ]\d{3}[ ]\d{4}/g;
    let result = pattern.exec(string);
while (result !== null) {
output.push(result[0]);
    result = pattern.exec(string);
}

console.log(output.join(', '));


}
matchPhoneNumber("359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222");