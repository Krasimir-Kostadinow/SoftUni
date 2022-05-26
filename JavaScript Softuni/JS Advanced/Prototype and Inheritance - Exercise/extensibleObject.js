function extensibleObject() {

    let obj = {};
    obj.extend = function (template) {
        for (let key in template) {
            if (typeof template[key] === 'function') {
                this.__proto__[key] = template[key];
            } else {
                this[key] = template[key];
            }
        }
    }
    return obj;
}
const myObj = extensibleObject();
console.log(myObj);



// const template = {
//     extensionMethod: function () { },
//     extensionProperty: 'someString'
// }
// myObj.extend(template);
// console.log(myObj);
