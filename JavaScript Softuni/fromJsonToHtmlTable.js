function fromJSONToHTMLTable(input) {
    let result = '<table>\n';

    let array = JSON.parse(input);

    let keys = Object.keys(array[0]);

    let heading = keys.map(el => {
        el = escapeHtml(el);
        let col = `<th>${el}</th>`
        return col;
    });
    let firstRow = `<tr>${heading.join('')}</tr>`;
    result += firstRow;

    for (const obj of array) {
        let velue = Object.values(obj);
        let row = velue.map(el => {
            if (typeof el === 'string') {
               el = escapeHtml(el);
            }
            let col = `<td>${el}</td>`
            return col;
        });
        let secondRow = `<tr>${row.join('')}</tr>`;
        result += `\n${secondRow}`
    }

    result += '\n</table>';

    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }

    return result;

}
console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10},
{"Name":"Angel",
"Score":5.50,
" Grade":10},
{"Name":"Angel",
"Score":5.50,
" Grade":10},
{"Name":"Angel",
"Score":5.50,
" Grade":10},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`

));