function listOfProducts(array) {
    
    let sortArray = array.sort();
    for (let i = 0; i < sortArray.length; i++) {
        const element = sortArray[i];
        console.log(`${i + 1}.${element}`);
    }

}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);