function gutAndReverse(string) {

    let text = '';
    let output = [];
    for (let i = string.length - 1; i >= 0; i--) {
        text += string[i];
        if (i === string.length / 2) {
            output.push(text);
            text = '';
        }
    }
   output.unshift(text);
   output.forEach(element => {
       console.log(element);
   });
}
gutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');