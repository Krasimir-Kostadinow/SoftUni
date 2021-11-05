function countStringOccurrences(text, word) {
    
text = ' '+text.concat(' ');

let arr = text.split(` ${word} `);

console.log(arr.length - 1);
}
countStringOccurrences('is This a word and it also a sentences',   
'is'
);