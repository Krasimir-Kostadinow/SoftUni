function pieceOfPie(arr, firstFlavor, secondFlavor) {
    let firstIndex = arr.indexOf(firstFlavor);
    let secondIndex = arr.indexOf(secondFlavor);
    let newArr = arr.slice(firstIndex, secondIndex + 1);

    return newArr;
}
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));