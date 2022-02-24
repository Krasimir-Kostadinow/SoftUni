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
console.log(escapeHtml(3)); 