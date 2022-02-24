function createSortedList() {
    let array = [];
    let object = {};

    object.add = function (el) {
        if (typeof(el) === 'number') {
            array.push(el);
            array = array.sort((a, b) => a - b);
        } else {
            console.log('The array takes only numbers.');
        }


    }
    object.remove = function (index) {
        if (index >= 0 && index <= array.length - 1) {
            array.splice(index, 1);
        } else {
            console.error('The index is outside the bounds of the array');
        }
    }
    object.get = function (index) {
        if (index >= 0 && index <= array.length - 1) {
            return array[index];
        } else {
            console.error('The index is outside the bounds of the array');
        }
    }
    object.size = function() {return array.length};

return object;
}
// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));
var myList = createSortedList();
  console.log(myList.size())
  myList.add(5)
  console.log(myList.get(0))
  console.log(myList.size())


